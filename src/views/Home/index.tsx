import * as React from "react";
import "./Home.scss";
import {getUsers} from "../../actions/users.actions";
import {connect} from "react-redux";
import {IUser} from "../../interfaces/IUser";
import { Link } from "react-router-dom";

export interface AppProps {
    usersList: IUser[];
    getUsers: typeof getUsers;
}

class HomePage extends React.Component<AppProps, undefined> {
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        return (
            <div className="home-page text-center pt-5">
                {this.props.usersList && this.props.usersList.map((user, i) =>
                    <div key={`user-${i}`}>
                        {user.login}
                        <Link to={{ pathname: user.login }}>Details</Link>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(
    state => ({ usersList: state.users.usersList }),
    {getUsers}
)(HomePage);