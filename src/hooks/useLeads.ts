import { useContext } from "react";
import { LeadsContext } from "../context/LeadsProvider";

export function useLeads() {
  const context = useContext(LeadsContext);
  if (context) {
    return context;
  } else {
    throw new Error("Ошибка");
  }
}
