<template>
  <div class="task-list">
    <div class="list-header">
      <h2>Task List</h2>
      <Router-Link
        :to="{ name: 'addTask' }"
        class="add-tasks-btn"
        @click="addTasks"
        >Add Tasks</Router-Link
      >
    </div>
    <ul class="task-items">
      <!-- Existing task list items -->
      <!-- ... -->
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
/* Styles for Task List component */

.task-list {
  margin-top: 20px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.add-tasks-btn {
  padding: 8px 16px;
  border: 2px solid #3498db;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.add-tasks-btn:hover {
  background-color: #2980b9;
  border-color: #2980b9;
}
</style>
