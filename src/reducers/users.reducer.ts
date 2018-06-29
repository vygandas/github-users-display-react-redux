import {HIDE_LOADING, SHOW_LOADING, GET_USERS_LIST, GET_USER, SHOW_ERROR} from "../actions/types";
import {IDefaultUsersState} from "../interfaces/IDefaultUsersState";
import {getLastUserIdFromList} from "../helpers/userListHelpers";

export const initialState: IDefaultUsersState = {
    isLoading: true,
    usersList: null,
    lastUserId: 0,
    user: null,
    errorMessage: null
};

export const users = (state = initialState, action) => {
    switch (action.type) {
    case SHOW_LOADING:
        return { ...state, loading: true };
    case HIDE_LOADING:
        return { ...state, loading: false };
    case GET_USERS_LIST:
        return { ...state, ...{
            usersList: action.payload,
            isLoading: false,
            lastUserId: getLastUserIdFromList(action.payload)
        }};
    case GET_USER:
        return { ...state, ...{ user: action.payload }, loading: false};
    case SHOW_ERROR:
        return { ...state, ...{ errorMessage: action.payload } };
    default:
        return state;
    }
};
