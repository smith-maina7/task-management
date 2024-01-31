import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async getTasks() {
      try {
        const response = await fetch("http://localhost:3000/api/tasks");

        const data = await response.json();
        this.tasks = data;
      } catch (err) {
        console.log("error in loading tasks", err);
      }
    },
  },
});
