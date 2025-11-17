import { Todo, TodoUpdateInput } from "../models/todo.model";
import { getTodosDB, updateTodoDB } from "../services/todo.service";

// Devuelve todas las tareas.
export async function getAllTodos(): Promise<Todo[]> {
  return await getTodosDB();
}

// Valida y delega la actualización de una tarea específica.
export async function updateTodo(id: string, data: TodoUpdateInput): Promise<Todo> {
  const hasTitulo = data.titulo !== undefined;
  const hasCompletada = data.completada !== undefined;

  if (!hasTitulo && !hasCompletada) {
    throw new Error("Debes enviar al menos 'titulo' o 'completada' para actualizar");
  }

  if (hasTitulo && typeof data.titulo !== "string") {
    throw new Error("El campo titulo debe ser de tipo string");
  }

  if (hasCompletada && typeof data.completada !== "boolean") {
    throw new Error("El campo completada debe ser de tipo boolean");
  }

  return await updateTodoDB(id, data);
}
