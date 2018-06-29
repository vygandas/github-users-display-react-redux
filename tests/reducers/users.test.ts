import {users as reducer, initialState} from "../../src/reducers/users.reducer";
import {GET_USERS_LIST} from "../../src/actions/types";
import * as usersMock from "./usersMock";

describe("users reducer", () => {

    it("initial state have main properties", () => {
        const r = expect(reducer(undefined, {}));
        r.toHaveProperty("usersList");
        r.toHaveProperty("isLoading");
        r.toHaveProperty("lastUserId");
    });

    it("should handle GET_USERS_LIST", () => {
        const users = {
            type: GET_USERS_LIST,
            payload: usersMock
        };
        const result = { ...initialState , ...{ usersList: usersMock, isLoading: false, lastUserId: 139 } };
        expect(reducer({}, users).usersList).not.toEqual(null);
    });

});