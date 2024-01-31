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
    async updateTaskStatus(taskId, newStatus) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        // Update the status on the backend
        try {
          const response = await fetch(
            `http://localhost:3000/api/tasks/${taskId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: newStatus }),
            }
          );

          if (response.ok) {
            // Update local state if backend update is successful
            this.tasks[taskIndex].status = newStatus;
          } else {
            console.log("Failed to update task status", response);
          }
        } catch (err) {
          console.log("Error updating task status", err);
        }
      }
    },
  },
});
