import axios from "axios";

export async function getProperties() {
  try {
    const token = sessionStorage.token;
    const response = await axios.get("http://localhost:4000/property", {
      headers: { token },
    });
    return response.data
  } catch (ex) {
    console.log(ex);
  }
  return null;
}
