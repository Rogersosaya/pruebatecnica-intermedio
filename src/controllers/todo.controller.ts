import { getTodosDB, updateTodoDB } from "../services/todo.service";

export async function getAllTodos() {
  return await getTodosDB();
}

export async function updateTodo(id: string, data: any) {

  if (!data.titulo || typeof data.titulo !== "string") {
    throw new Error("El campo 'titulo' es obligatorio y debe ser de tipo string");
  }

  const completada = data.completada ?? false;

  return await updateTodoDB(id, data.titulo, completada);
}
