import api from "../utils/axios";

export const test = async () => {
  try {
    const { data } = await api.get("/test");
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
