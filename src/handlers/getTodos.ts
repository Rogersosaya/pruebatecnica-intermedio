import { getAllTodos } from "../controllers/todo.controller";
import { Todo } from "../models/todo.model";

// Lambda HTTP que lista todas las tareas almacenadas.
export const handler = async () => {
  try {
    const todos: Todo[] = await getAllTodos();
    return { statusCode: 200, body: JSON.stringify(todos) };
  } catch (err: any) {
    return { statusCode: 200, body: JSON.stringify({ message: err.message }) };
  }
};