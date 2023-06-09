import axios from "axios";
import { toast } from "react-toastify";

class WiseyAPI {
  constructor() {
    this.baseURL = "https://api.wisey.app/api/v1";
  }

  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async getToken() {
    try {
      const res = await axios.get(
        `${this.baseURL}/auth/anonymous?platform=subscriptions`
      );
      this.setToken(res.data.token);
    } catch (error) {
      toast.error("Something goes wrong.");
    }
  }

  async getCourses() {
    try {
      await this.getToken();
      const res = await axios.get(`${this.baseURL}/core/preview-courses`);
      return res.data;
    } catch (error) {
      toast.error("Something goes wrong.");
    }
  }

  async getCourseById(id) {
    try {
      await this.getToken();
      const res = await axios.get(`${this.baseURL}/core/preview-courses/${id}`);
      return res.data;
    } catch (error) {
      toast.error("Something goes wrong.");
    }
  }
}

const wiseyAPI = new WiseyAPI();
export default wiseyAPI;
