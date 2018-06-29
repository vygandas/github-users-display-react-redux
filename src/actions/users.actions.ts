import {GET_USER, GET_USERS_LIST, HIDE_LOADING, SHOW_ERROR, SHOW_LOADING} from "./types";
import axios from "axios";
import {API_GITHUB_URL} from "../config/api.config";
import {stringify} from "querystring";

export function getUsers() {
    return dispatch => {
        dispatch(showLoading());
        axios.get(`${API_GITHUB_URL}/users?${stringify({ since: 135 })}`)
            .then(response => dispatch({
                type: GET_USERS_LIST,
                payload: response.data
            }))
            .catch(response => dispatch({
                type: SHOW_ERROR,
                payload: response
            }));
    };
}

export function getUser(username: string) {
    return dispatch => {
        dispatch(showLoading());
        axios.get(`${API_GITHUB_URL}/users/${username}`)
            .then(response => dispatch({
                type: GET_USER,
                payload: response.data
            }))
            .catch(response => dispatch({
                type: SHOW_ERROR,
                payload: response
            }));
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
