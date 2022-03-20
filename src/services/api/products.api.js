import axios from "axios";
import endpoints from "@services/api";

export const addProduct = async (body) => {
  try {
    const config = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(endpoints.products.addProducts, body, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
