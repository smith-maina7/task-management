<!-- StatusDropdown.vue -->
<template>
  <div class="list-options">
    <select v-model="selectedStatus">
      <option v-for="status in statusOptions" :key="status" :value="status">
        {{ status }}
      </option>
    </select>
    <button @click="updateStatus" class="tick-button">Update</button>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useTaskStore } from "@/Stores/TaskStore";

const taskStore = useTaskStore();
const props = defineProps(["taskId"]);

const selectedStatus = ref("");
const statusOptions = ["To-Do", "In Progress", "Completed"];

const updateStatus = async () => {
  if (selectedStatus.value) {
    await taskStore.updateTaskStatus(props.taskId, selectedStatus.value);

    // Clear the selectedStatus after updating
    selectedStatus.value = "";
  }
};
</script>
<style>
.list-options {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.tick-button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.tick-button:hover {
  background-color: #45a049;
}

/* Styles for the tick SVG */
.tick-button svg {
  width: 16px;
  height: 16px;
}
</style>
