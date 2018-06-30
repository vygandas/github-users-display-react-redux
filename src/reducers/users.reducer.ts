import {HIDE_LOADING, SHOW_LOADING, GET_USERS_LIST, GET_USER, SHOW_ERROR, GET_MORE_USERS_LIST} from "../actions/types";
import {IUsersState} from "../interfaces/IUsersState";
import {getLastUserIdFromList} from "../helpers/userListHelpers";

export const initialState: IUsersState = {
    isLoading: true,
    usersList: null,
    lastUserId: 0,
    user: null,
    errorMessage: null
};

export const users = (state: IUsersState = initialState, action): IUsersState => {
    switch (action.type) {
    case SHOW_LOADING:
        return { ...state, isLoading: true };
    case HIDE_LOADING:
        return { ...state, isLoading: false };
    case GET_USERS_LIST:
        return { ...state, ...{
            usersList: action.payload,
            lastUserId: getLastUserIdFromList(action.payload)
        }};
    case GET_MORE_USERS_LIST:
        return { ...state, ...{
            usersList: [].concat(state.usersList, action.payload),
            lastUserId: getLastUserIdFromList(action.payload)
        }};
    case GET_USER:
        return { ...state, ...{ user: action.payload }};
    case SHOW_ERROR:
        return { ...state, ...{ errorMessage: action.payload } };
    default:
        return state;
    }
};
