import { defineStore } from "pinia";
import { authService } from "../services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null as string | null,
  }),
  actions: {
    async login(email: string, password: string) {
      const data = await authService.login(email, password);
      this.user = data.user;
      this.token = data.token;
      if (this.token) {
        localStorage.setItem("token", this.token);
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});