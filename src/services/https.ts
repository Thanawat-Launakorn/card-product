import throwResponse from "@/config/axios";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products/";
export const fetchProducts = async () => {
  const response = await axios.get(BASE_URL);
  if (response.status === 200) {
    return response.data;
  }
  throwResponse(response);
};
