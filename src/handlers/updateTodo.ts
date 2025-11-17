import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { updateTodo } from "../controllers/todo.controller";

// Lambda HTTP que actualiza una tarea según el id recibido en la ruta.
export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const id = event.pathParameters?.id; // El id llega como parámetro de path.
    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ mensaje: "Falta el parámetro 'id' en la ruta" }),
      };
    }
    const body = event.body ? JSON.parse(event.body) : {}; // Evita errores si llega body vacío.
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
