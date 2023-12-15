<template>
  <div class="task-list-view">
    <h2>Task Management</h2>
    <TaskList />
  </div>
</template>

<script setup>
// import { ref } from "vue";
import TaskList from "@/components/TaskList.vue"; // Import the TaskList component

// Dummy tasks data for demonstration
// const tasks = ref([
//   {
//     id: 1,
//     title: "Complete Project Proposal",
//     description: "Write and submit the project proposal document.",
//     dueDate: "2023-12-15",
//     status: "To-Do",
//   },
//   // Add more tasks as needed
// ]);
</script>

<style scoped>
/* Styles for TaskListView component */

.task-list-view {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
}
</style>
