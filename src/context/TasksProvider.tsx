import { createContext, FC, PropsWithChildren, useState } from "react";
import { TasksContextType, TaskType } from "../type";

export const TasksContext = createContext<TasksContextType | null>(null);

export const TasksProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
