import {IUser} from "../interfaces/IUser";

export const getLastUserIdFromList = (users: IUser[]) => {
    if (users != null && users.length > 0) {
        const lastUser = users[users.length - 1];
        return typeof lastUser.id !== typeof undefined ? lastUser.id : 0;
    }
    return 0;
};
