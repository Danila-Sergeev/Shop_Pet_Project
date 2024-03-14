import { $authHost, $host } from "./index";
/* import jwt_decode from "jwt-decode";
 */
export const registration = async (email, password) => {
  const response = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  /*  localStorage.setItem("token", data.token);
  return jwt_decode(data.token); */
  return response;
};

export const login = async (email, password) => {
  const response = await $host.post("api/user/login", {
    email,
    password,
    role: "ADMIN",
  });
  /*  localStorage.setItem("token", data.token);
  return jwt_decode(data.token); */
  return response;
};

export const check = async () => {
  const response = await $authHost.get("api/user/auth");
  /*  localStorage.setItem("token", data.token);
  return jwt_decode(data.token); */
  return response;
};
