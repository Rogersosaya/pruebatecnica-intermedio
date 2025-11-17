import { Todo } from "../models/todo.model";
import { ddbDocClient } from "../utils/dynamoClient";
import { ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

// Lee todas las tareas desde la tabla de DynamoDB.
export async function getTodosDB() {
  const result = await ddbDocClient.send(
    new ScanCommand({ TableName: "todos" })
  );
  return result.Items;
}

// Ejecuta la actualización parcial de una tarea y devuelve los atributos nuevos.
export async function updateTodoDB(todo: Todo) {
  const result = await ddbDocClient.send(
    new UpdateCommand({
      TableName: "todos",
      Key: { id: todo.id },
      UpdateExpression: "SET titulo = :titulo, completada = :completada",
      ExpressionAttributeValues: {
        ":titulo": todo.titulo,
        ":completada": todo.completada,
      },
      ReturnValues: "ALL_NEW",
    })
  );

  return result.Attributes;
}
