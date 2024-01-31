<template>
  <form class="task-form" @submit.prevent="submitTask">
    <h3 class="create-task-heading">
      Create New Task
      <router-link :to="{ name: 'home' }" class="home-icon">
        <fa icon="home" />
      </router-link>
    </h3>
    <!-- Form fields -->
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" id="title" required v-model="newTask.title" />
    </div>
    <div class="form-group">
      <label for="discription">Discription:</label>
      <textarea id="discription" v-model="newTask.discription"></textarea>
    </div>
    <div class="form-group">
      <label for="dueDate">Due Date:</label>
      <input type="date" id="dueDate" required v-model="newTask.due_date" />
    </div>
    <div class="form-group">
      <label for="status">Status:</label>
      <select id="status" required v-model="newTask.status">
        <option value="To-Do">To-Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
    <div class="form-actions">
      <button type="submit">Save</button>
      <button type="button">Cancel</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const newTask = ref({
  title: "",
  discription: "",
  due_date: new Date().toISOString().substring(0, 10),
  status: "",
});

const submitTask = async () => {
  try {
    newTask.value.due_date = new Date(newTask.value.due_date).toISOString();
    const response = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask.value),
    });
    if (response.ok) {
      const task = await response.json();
      console.log("Task successfully created", task);

      router.push({ name: "home" });
    } else {
      console.log("Task failed", response);
    }
  } catch (err) {
    console.log("Task failed", err);
  }
};
</script>
<style scoped>
/* Styles for Task Form component */

.task-form {
  width: 75%;
  max-width: 750px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
}

.create-task-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 20px;
}

.form-group {
  margin-bottom: 15px;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions button {
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-actions button:hover {
  background-color: #2980b9;
}
.home-icon {
  top: 20px;
  left: 20px;
  font-size: 24px;
  color: #2a2e31;
  text-decoration: none;
  transition: color 0.3s;
}

.home-icon:hover {
  color: #2980b9;
}
</style>
