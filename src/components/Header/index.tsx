import * as React from "react";
import "./Header.scss";
import {getUsers} from "../../actions/users.actions";
import {connect} from "react-redux";

const mainLogo = require("assets/img/logo.png");

export interface AppProps {
    getUsers: typeof getUsers;
}

class Header extends React.Component<AppProps, undefined> {
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        return (
            <div className="header-component text-center pt-5">
                <img src={mainLogo} height={211} width={213}/>
                <h1 className="h2 mt-3 text-shadow-md">GitHub profiles viewer!</h1>
                <p>Welcome! Feel free to browse any profiles from GitHub API!</p>
            </div>
        );
    }
}

export default connect(
    state => ({ loading: state.users.isLoading }),
    {getUsers}
)(Header);