<template>
  <div class="task-list-view">
    <h2>Task Management</h2>
    <TaskList />
  </div>
</template>

<script setup>
// import { ref } from "vue";
import TaskList from "@/components/TaskList.vue"; // Import the TaskList component
import { onMounted } from "vue";
import { useTaskStore } from "@/Stores/TaskStore";

const store = useTaskStore();
onMounted(() => {
  store.getTasks();
});
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
