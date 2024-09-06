import axios from "axios";
import { baseUrl } from "../baseUrl";


const loginUrl = `${baseUrl}/user/login/`;


export const loginApi = async (email, password) => {
    try {
        const response = await axios.post(loginUrl, { email, password });

        if (response.status === 200) {
            console.log("user success")
            return {'status': true, response : response.data}

        } 
    } catch (error) {
        
        if (error.response) {
            console.log("API error response:", error.response.data);
            return { 'status':false,  message: error.response.data.message }
            // ErrorMessage({ message: error.response.data.message });
        } else {
            
            console.log("Network error:", error.message);
            return { 'status':false,  message: error.message }
            // ErrorMessage({ message: "Network error. Please check your internet connection." });

        }
        return error.response?.data || { message: "An error occurred" };
    }
};
