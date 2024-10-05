export type LeadType = {
  id: number;
  name: string;
  price: number;
//   responsible_user_id: number;
//   status_id: number;
//   created_by: number;
//   updated_by: number;
//   created_at: number;
//   updated_at: number;
  closest_task_at: number;
//   account_id: number;
};

export type LeadsContextType = {
  leads: LeadType[];
  setLeads: (arg: LeadType[]) => void;
};

export type TaskType = {
  id: number;
  created_by: number;
  updated_by: number;
  created_at: number;
  updated_at: number;
  responsible_user_id: number;
  entity_id: number;
  is_completed: boolean;
  text: string;
  account_id: number;
};

export type TasksContextType = {
  tasks: TaskType[];
  setTasks: (arg: TaskType[]) => void;
};
