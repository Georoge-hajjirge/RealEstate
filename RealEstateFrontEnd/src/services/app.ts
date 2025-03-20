import axios from "axios";

const api= axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'http://localhost:3000',
    },
});
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Attach the token to every request
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api;
