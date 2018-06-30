import * as React from "react";
import {IUser} from "../../interfaces/IUser";
import { Link } from "react-router-dom";
import {event} from "../../helpers/gtag";
import "./ProfileItem.scss";

export interface ProfileItemProps {
    user: IUser;
}

export const ProfileItem = (props: ProfileItemProps): JSX.Element => {
    return (
        <div className="profile-item-component row" id={`profile-item-${props.user.id}`}>
            <div className="col-12 wrapper py-4 py-md-2">
                <div className="float-md-left mr-md-3">
                    <img src={props.user.avatar_url} className="rounded avatar-image" alt={props.user.login}/>
                </div>
                <div className="float-md-left pt-1 db">
                    <h2 className="h4 mt-md-4 pt-2">{props.user.login}</h2>
                </div>
                <div className="pt-2 float-md-right db">
                    <Link
                        to={{ pathname: props.user.login }}
                        className="btn mtn-sm btn-success mt-md-4"
                        onClick={() => event("profile_details_button", "click")}
                    >Details</Link>
                </div>
            </div>
        </div>
    );
};
