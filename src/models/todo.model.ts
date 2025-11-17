// Representa la estructura persistida de una tarea.
export interface Todo {
  id: string;
  titulo: string;
  completada: boolean;
}

// Datos permitidos al momento de actualizar una tarea.
export interface TodoUpdateInput {
  titulo: string;
  completada?: boolean;
}