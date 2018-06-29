import * as React from "react";
import "./Home.scss";
import {getUsers} from "../../actions/users.actions";
import {connect} from "react-redux";
import {IUser} from "../../interfaces/IUser";
import { Link } from "react-router-dom";
import Preloader from "../../hoc/Preloader/index";

export interface AppProps {
    usersList: IUser[];
    getUsers: typeof getUsers;
    pathname: any;
}

class HomePage extends React.Component<AppProps, undefined> {
    componentDidMount() {
        // console.log("this.props.location.pathname", this.props.location.pathname);
        // if (this.props.location.pathname === "/") {
            this.props.getUsers();
        // }
    }
    render() {
        return (
            <div className="home-page text-center pt-5">
                <Preloader>
                {this.props.usersList && this.props.usersList.map((user, i) =>
                    <div key={`user-${i}`}>
                        {user.login}
                        <Link to={{ pathname: user.login }}>Details</Link>
                    </div>
                )}
                </Preloader>
            </div>
        );
    }
}

export default connect(
    state => ({ usersList: state.users.usersList }),
    {getUsers}
)(HomePage);