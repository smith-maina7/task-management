<template>
  <div class="task-form-view">
    <h2>Task Form</h2>
    <TaskForm />
  </div>
</template>

<script setup>
import TaskForm from "@/components/TaskForm.vue"; // Import the TaskForm component
</script>

<style scoped>
/* Styles for TaskFormView component */

.task-form-view {
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
