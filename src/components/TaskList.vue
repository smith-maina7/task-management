<template>
  <div class="task-list">
    <div class="list-header">
      <h2>Task List</h2>
      <Router-Link :to="{ name: 'addTask' }" class="add-tasks-btn"
        >Add Tasks</Router-Link
      >
    </div>
    <div class="task-cards">
      <div
        v-for="task in store.tasks"
        :key="task.id"
        class="task-card"
        :style="{
          backgroundColor: getRandomColor(),
          color: getContrastColor(),
        }"
      >
        <i
          class="fas fa-trash-alt delete-icon"
          @click="deleteTask(task.id)"
        ></i>
        <!-- <i class="fas fa-edit edit-icon" @click="editTask()"></i> -->
        <h3>{{ task.title }}</h3>
        <p>{{ task.discription }}</p>
        <p>Due Date: {{ task.due_date }}</p>
        <p>Status: {{ task.status }}</p>
        <listOptions
          :taskId="task.id"
          :backgroundColor="getRandomColor()"
          :color="getContrastColor()"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/Stores/TaskStore";
import listOptions from "@/components/listOptions.vue";

const store = useTaskStore();
const deleteTask = (taskId) => store.deleteTask(taskId);

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const getContrastColor = () => {
  const bgColor = getRandomColor();
  // Calculate brightness using relative luminance formula
  const brightness =
    (parseInt(bgColor.substr(1, 2), 16) * 299 +
      parseInt(bgColor.substr(3, 2), 16) * 587 +
      parseInt(bgColor.substr(5, 2), 16) * 114) /
    1000;

  return brightness > 125 ? "#333" : "#fff"; // Use dark or light text color based on brightness
};
</script>

<style scoped>
/* Styles for Task Cards */
.task-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.list-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}
.task-card {
  position: relative;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  color: rgb(150, 139, 139);
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
.delete-icon,
.edit-icon {
  position: absolute;
  /* Red color for the trash can icon */
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 3px;
}
.delete-icon {
  top: 10px;
  right: 8px;
  font-size: 20px;
}
.edit-icon {
  top: 10px;
  right: 38px;
  font-size: 20px;
}

.delete-icon:hover,
.edit-icon:hover {
  color: #bdb4b5; /* Darker red on hover */
}
</style>
