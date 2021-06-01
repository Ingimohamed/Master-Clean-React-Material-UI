import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/register";

export function register(user) {
    return http.post(apiEndpoint, {
        username: user.firstname,
        email: user.email,
        password: user.password,
        password2: user.confirmpassword,
    });
}