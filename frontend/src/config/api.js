import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post("/auth/login", credentials),
  register: (userData) => api.post("/auth/register", userData),
  logout: () => api.post("/auth/logout"),
  getCurrentUser: () => api.get("/auth/me"),
  updateProfile: (userData) => api.put("/auth/profile", userData),
};

export const restaurantAPI = {
  getAll: () => api.get("/restaurants"),
  getById: (id) => api.get(`/restaurants/${id}`),
  create: (restaurantData) => api.post("/restaurants", restaurantData),
  update: (id, restaurantData) => api.put(`/restaurants/${id}`, restaurantData),
  delete: (id) => api.delete(`/restaurants/${id}`),
};

export const menuAPI = {
  getMenuItems: (restaurantId) => api.get(`/menu/restaurant/${restaurantId}`),
  addMenuItem: (restaurantId, menuItem) =>
    api.post(`/menu/${restaurantId}`, menuItem),
  updateMenuItem: (restaurantId, itemId, updates) =>
    api.put(`/menu/${restaurantId}/${itemId}`, updates),
  deleteMenuItem: (restaurantId, itemId) =>
    api.delete(`/menu/${restaurantId}/${itemId}`),
};

export const orderAPI = {
  getAll: () => api.get("/orders"),
  getById: (id) => api.get(`/orders/${id}`),
  create: (orderData) => api.post("/orders", orderData),
  updateStatus: (id, status) => api.put(`/orders/${id}/status`, { status }),
  getRestaurantOrders: (restaurantId) =>
    api.get(`/orders/restaurant/${restaurantId}`),
};

export const reviewAPI = {
  create: (reviewData) => api.post("/reviews", reviewData),
  getByRestaurant: (restaurantId) =>
    api.get(`/reviews/restaurant/${restaurantId}`),
};

export default api;
