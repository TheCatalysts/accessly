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
    <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border border-gray-300 rounded mb-4" />
    <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border border-gray-300 rounded mb-4" />
    <button @click="login" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
  </div>
</template>

<style scoped>
/* No custom styles needed */
</style>