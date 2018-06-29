import {IUser} from "./IUser";

export interface IDefaultUsersState {
    isLoading: boolean;
    usersList: IUser[];
    lastUserId: number;
}