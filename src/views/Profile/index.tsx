import * as React from "react";
import "./Profile.scss";
import {getUser, hideLoading} from "../../actions/users.actions";
import {connect} from "react-redux";
import {IUser} from "../../interfaces/IUser";
import { Link } from "react-router-dom";

export interface AppProps {
    usersList: IUser[];
    getUser: typeof getUser;
    hideLoading: typeof hideLoading;
    match: { params?: { username?: string } };
}

class ProfilePage extends React.Component<AppProps, undefined> {
    constructor(props: AppProps) {
        super(props);
    }
    getUsername = () => {
        const p = this.props;
        return (typeof p !== typeof undefined
            && typeof p.match !== typeof undefined
            && typeof p.match.params !== typeof undefined
            && typeof p.match.params.username !== typeof undefined)
            ? this.props.match.params.username
            : null;
    }
    componentDidMount() {
        this.props.getUser(this.getUsername());
    }
    render() {
        return (
            <div className="profile-page">
                <Link to={{ pathname: "/" }}>Back</Link>
                dgsdgsdfgsdg
                gsdgsdgsdg
            </div>
        );
    }
}

export default connect(
    state => ({ usersList: state.users.usersList }),
    {getUser, hideLoading}
)(ProfilePage);