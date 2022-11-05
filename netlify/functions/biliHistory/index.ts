import doing from "./doing.json";
import todo from "./todo.json";
import done from "./done.json";
import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  let jsonData = [];
  let result = [];
  let { body } = event;

  if (body) {
    let data: { type: number; page: number; size: number } = JSON.parse(body);
    if (data.type === 0) {
      jsonData = doing;
    } else if (data.type === 1) {
      jsonData = todo;
    } else {
      jsonData = done;
    }

    result = jsonData.slice(10 * (data.page - 1), 10 * (data.page - 1) + 10);
  }

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  };

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      total: jsonData.length,
      data: result,
    }),
  };
};

export { handler };
