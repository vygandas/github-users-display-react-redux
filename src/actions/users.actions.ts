import {GET_USERS_LIST, HIDE_LOADING, SHOW_LOADING} from "./types";
import axios from "axios";
import {API_GITHUB_URL} from "../config/api.config";
import {stringify} from "querystring";

export function getUsers() {

    return dispatch => {
        axios.get(`${API_GITHUB_URL}/users?${stringify({ since: 135 })}`)
            .then(response => dispatch({
                type: GET_USERS_LIST,
                payload: response.data
            }))
            .catch(() => {
                // Terrible fail :(
            });
    };
}

export function showLoading() {
    return {
        type: SHOW_LOADING
    };
}

export function hideLoading() {
    return {
        type: HIDE_LOADING
    };
}
