import { getAllTodos } from "../controllers/todo.controller";

export const handler = async () => {
  try {
    const todos = await getAllTodos();
    return { statusCode: 200, body: JSON.stringify(todos) };
  } catch (err: any) {
    return { statusCode: 200, body: JSON.stringify({ message: err.message }) };
  }
};