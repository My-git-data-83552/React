import axios from "axios";

// export async function register(firstName, lastName, email, password,phone) {
//   try {
//     const body = { firstName, lastName, email, password ,phone};

//     const result = axios.post("http://localhost:4000/user/register", body);
//     console.log(body)
//     return result.data;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return null;
// }

export async function register(firstName, lastName, email, password, phone) {
  try {
    const body = { firstName, lastName, email, password, phone };
    const response = await axios.post("http://localhost:4000/user/register", body);
    return response.data;
  } catch (ex) {
    console.log(ex);
    // return { status: 'error', message: ex.response?.data?.message || 'Registration failed' };
  }
  return null;
}

export async function login(email, password) {
  try {
    const body = { email, password };
    const response = await axios.post("http://localhost:4000/user/login", body);
    return response.data;
  } catch (ex) {
    console.log(ex);
  }
}
