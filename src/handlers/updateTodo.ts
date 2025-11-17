import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateTodo } from "../controllers/todo.controller";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const id = event.pathParameters?.id;

    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ mensaje: "Falta el parámetro 'id' en la ruta" }),
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const result = await updateTodo(id, body);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };

  } catch (err: any) {
    return {
      statusCode: 400,
      body: JSON.stringify({ mensaje: err.message }),
    };
  }
};
