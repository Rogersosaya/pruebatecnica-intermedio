export interface Todo {
  id: string;
  titulo: string;
  completada: boolean;
}

export interface TodoUpdateInput {
  titulo: string;
  completada?: boolean;
}