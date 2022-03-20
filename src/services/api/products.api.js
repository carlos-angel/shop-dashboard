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

export const editProduct = async ({ id, body }) => {
  try {
    const config = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    const response = await axios.put(endpoints.products.updateProduct(id), body, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(endpoints.products.deleteProduct(id));
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(endpoints.products.getProduct(id));
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
