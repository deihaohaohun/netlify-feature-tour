import accounts from "./account.json";
import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(accounts),
  };
};

export { handler };
