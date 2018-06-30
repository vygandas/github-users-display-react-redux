import {GET_MORE_USERS_LIST, GET_USER, GET_USERS_LIST, HIDE_LOADING, SHOW_ERROR, SHOW_LOADING} from "./types";
import axios from "axios";
import {API_GITHUB_URL} from "../config/api.config";
import {stringify} from "querystring";

export function getUsers(since: number = 0) {
    return dispatch => {
        dispatch(showLoading());
        axios.get(`${API_GITHUB_URL}/users?${stringify({ since })}`)
            .then(response => dispatch({
                type: (since === 0) ? GET_USERS_LIST : GET_MORE_USERS_LIST,
                payload: response.data
            }))
            .then(() => dispatch(hideLoading()))
            .catch(error => dispatch({
                type: SHOW_ERROR,
                payload: error.response.data.message
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
            .catch(error => {
                return dispatch({
                    type: SHOW_ERROR,
                    payload: error.response.data.message
                });
            })
            .then(() => dispatch(hideLoading()));
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
