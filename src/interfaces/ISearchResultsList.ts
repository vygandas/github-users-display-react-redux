import {IUser} from "./IUser";

export interface ISearchResultsList {
    readonly total_count: number;
    readonly incomplete_results: boolean;
    readonly items: IUser[];
}