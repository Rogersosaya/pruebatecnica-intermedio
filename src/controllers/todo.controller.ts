import { TodoUpdateInput } from "../models/todo.model";
import { getTodosDB, updateTodoDB } from "../services/todo.service";

// Devuelve todas las tareas.
export async function getAllTodos() {
  return await getTodosDB();
}

// Valida y delega la actualización de una tarea específica.
export async function updateTodo(id: string, data: TodoUpdateInput) {
  if (!data.titulo || typeof data.titulo !== "string") {
    throw new Error("El campo titulo es obligatorio y debe ser de tipo string");
  }

  const completada = data.completada ?? false; // Default explícito cuando no llega el flag.
  
  const todo = {
    id,
    titulo: data.titulo,
    completada
  }
  return await updateTodoDB(todo);
}
