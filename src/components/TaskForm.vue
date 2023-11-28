<template>
  <form class="task-form">
    <h3 class="create-task-heading">
      Create New Task
      <router-link :to="{ name: 'home' }" class="home-icon">
        <fa icon="home" />
      </router-link>
    </h3>
    <!-- Form fields -->
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" id="title" required />
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <textarea id="description"></textarea>
    </div>
    <div class="form-group">
      <label for="dueDate">Due Date:</label>
      <input type="date" id="dueDate" required />
    </div>
    <div class="form-group">
      <label for="status">Status:</label>
      <select id="status" required>
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
// No logic provided for brevity
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
