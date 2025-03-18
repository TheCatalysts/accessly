<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../store/authStore";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

const login = async () => {
  try {
    await authStore.login(email.value, password.value);
    alert("Login successful");
  } catch (error) {
    alert("Login failed");
  }
};
</script>

<template>
  <div class="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <input v-model="email" type="email" placeholder="Email" class="input-field" />
    <input v-model="password" type="password" placeholder="Password" class="input-field" />
    <button @click="login" class="btn-primary">Login</button>
  </div>
</template>

<style scoped>
.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}
.btn-primary {
  background-color: #3498db;
  color: white;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
}
</style>
