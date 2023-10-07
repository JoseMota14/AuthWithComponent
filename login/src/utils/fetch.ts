import axios from "axios";

const url: string | undefined = import.meta.env.VITE_API_URL;

export async function postData(endpoint: string, payload: object) {
  try {
    const response = await axios.post(url + endpoint, payload);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getData(endpoint: string) {
  try {
    const response = await axios.get(url + endpoint);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
