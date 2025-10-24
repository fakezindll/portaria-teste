import axios from "axios";

const API_URL = "http://localhost:8080/api/portaria";
const getToken = () => localStorage.getItem("token");

const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const registrarEntrada = async (documento) => {
  const response = await axios.post(`${API_URL}/entrada`, { identificador: documento }, config());
  return response.data;
};

export const registrarSaida = async (documento) => {
  const response = await axios.put(`${API_URL}/saida`, { identificador: documento }, config());
  return response.data;
};
