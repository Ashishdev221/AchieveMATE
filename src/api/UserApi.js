import axios from "axios";
const url = "/";

export const registerUser = async (data) => {
    const { data: res } = await axios.post(`/api/users/register`, data);
    return res;
};
