import axios from "axios"

const apiUrl = import.meta.env.VITE_USER_API_URL;

export const userRegister = async (body) => {
    try {
        const url = `${apiUrl}/register`;
        const { data } = await axios.post(url, body);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Hubo un error al registrar el usuario")
    }
}
export const userLogin = async (body) => {
    try {
        const url = `${apiUrl}/login`;
        const { data } = await axios.post(url, body);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Hubo un error al loguear el usuario")
    }
}