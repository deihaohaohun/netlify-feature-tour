import accounts from "./account.json";
import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  };

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(accounts),
  };
};

export { handler };
