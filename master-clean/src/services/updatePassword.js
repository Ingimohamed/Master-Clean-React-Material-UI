import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/change_password/";

export function updatePassword(user) {
    return http.post(apiEndpoint, {
        old_password: user.firstname,
        new_password: user.email,
        confirm_new_password: user.password,
    });
}

//not working yet 