import {IUser} from "../interfaces/IUser";

export const getLastUserIdFromList = (users: IUser[]) => {
    const lastUser = users.slice(-1)[0];
    return typeof lastUser !== typeof undefined && typeof lastUser === typeof IUser ? lastUser.id : 0;
};
