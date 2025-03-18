import axios from 'axios';

const API_URL = 'https://aut-api/auth';

export const authService = {
  async login(email: string, password: string) {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  },
  async register(email: string, password: string) {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  },
};
