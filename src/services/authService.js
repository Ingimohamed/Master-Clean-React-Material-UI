import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login";

export function login(email_or_username, password) {
    return http.post(apiEndpoint, { email_or_username, password });
}