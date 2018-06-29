import * as React from "react";
import {IUser} from "../../interfaces/IUser";
import { Link } from "react-router-dom";
import "./ProfileItem.scss";

export interface AppProps {
    user: IUser;
}

export const ProfileItem = (props: AppProps): JSX.Element => {
    return (
        <div className="profile-item-component row">
            <div className="col-12">
                <div className="float-left mr-3">
                    <img src={props.user.avatar_url} className="rounded" alt={props.user.login} width={100}/>
                </div>
                <div className="float-left pt-1">
                    <h2 className="h4 float-left mt-4 pt-2">{props.user.login}</h2>
                </div>
                <span className="pt-2 float-right">
                    <Link to={{ pathname: props.user.login }} className="btn btn-success mt-4">Details</Link>
                </span>
            </div>
        </div>
    );
};
