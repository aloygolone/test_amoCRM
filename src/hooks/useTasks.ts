import { useContext } from "react";
import { TasksContext } from "../context/TasksProvider";

export function useTasks() {
  const context = useContext(TasksContext);
  if (context) {
    return context;
  } else {
    throw new Error("Ошибка");
  }
}
