import axios from "axios";

export const axiosWithAuthDB = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://netflix-clone-backend01.herokuapp.com",
  });
};
