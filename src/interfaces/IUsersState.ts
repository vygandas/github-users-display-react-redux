import {IUser} from "./IUser";

export interface IUsersState {
    isLoading: boolean;
    usersList: IUser[];
    lastUserId: number;
    user: IUser;
    errorMessage: string;
}