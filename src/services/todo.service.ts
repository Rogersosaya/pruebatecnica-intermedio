import { ddbDocClient } from "../utils/dynamoClient";
import { ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

export async function getTodosDB() {
  const result = await ddbDocClient.send(
    new ScanCommand({ TableName: "todos" })
  );
  return result.Items;
}

export async function updateTodoDB(id: string, titulo: string, completada: boolean) {
  const result = await ddbDocClient.send(
    new UpdateCommand({
      TableName: "todos",
      Key: { id: id },
      UpdateExpression: "SET titulo = :titulo, completada = :completada",
      ExpressionAttributeValues: {
        ":titulo": titulo,
        ":completada": completada,
      },
      ReturnValues: "ALL_NEW",
    })
  );

  return result.Attributes;
}
