import { Todo, TodoUpdateInput } from "../models/todo.model";
import { ddbDocClient } from "../utils/dynamoClient";
import { ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

// Lee todas las tareas desde la tabla de DynamoDB.
export async function getTodosDB(): Promise<Todo[]> {
  const result = await ddbDocClient.send(
    new ScanCommand({ TableName: "tec-practicantes-todo" })
  );
  return (result.Items ?? []) as Todo[];
}

// Ejecuta la actualización parcial de una tarea y devuelve los atributos nuevos.
export async function updateTodoDB(id: string, updates: TodoUpdateInput): Promise<Todo> {
  const setExpressions: string[] = [];
  const expressionAttributeValues: Record<string, unknown> = {};

  if (updates.titulo !== undefined) {
    setExpressions.push("titulo = :titulo");
    expressionAttributeValues[":titulo"] = updates.titulo;
  }

  if (updates.completada !== undefined) {
    setExpressions.push("completada = :completada");
    expressionAttributeValues[":completada"] = updates.completada;
  }

  const result = await ddbDocClient.send(
    new UpdateCommand({
      TableName: "tec-practicantes-todo",
      Key: { id },
      UpdateExpression: `SET ${setExpressions.join(", ")}`,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW",
    })
  );

  return result.Attributes as Todo;
}
