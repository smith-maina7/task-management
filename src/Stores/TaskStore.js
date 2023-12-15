import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "Complete Project Proposal",
        description: "Write and submit the project proposal document.",
        dueDate: "2023-12-15",
        status: "To-Do",
      },
    ],
  }),
});
