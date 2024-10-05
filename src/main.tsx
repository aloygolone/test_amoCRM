import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LeadsProvider } from "./context/LeadsProvider.tsx";
import { TasksProvider } from "./context/TasksProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LeadsProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </LeadsProvider>
  </StrictMode>
);
