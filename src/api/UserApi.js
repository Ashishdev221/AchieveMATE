import axios from "axios";
const url = "/users";

export const registerUser = async (data) => {
    const { data: res } = await axios.post(`${url}/`, data);
    return res;
};
