import {HIDE_LOADING, SHOW_LOADING, GET_USERS_LIST} from "../actions/types";
import {IDefaultUsersState} from "../interfaces/IDefaultUsersState";
import {getLastUserIdFromList} from "../helpers/userListHelpers";

export const initialState: IDefaultUsersState = {
    isLoading: true,
    usersList: null,
    lastUserId: 0
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
    default:
        return state;
    }
};
