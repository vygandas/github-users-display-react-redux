import * as React from "react";
import { connect } from "react-redux";
import "./Preloader.scss";
import {IUser} from "../../interfaces/IUser";

const loaderImage = require("assets/img/loader.gif");

export interface AppProps {
    loading: boolean;
    users: IUser[];
}

/**
 * Preloader component is watching isLoading state property and displaying
 * loader animation or content components.
 * */
class Preloader extends React.Component<AppProps, undefined> {
    render() {
        console.log("this.props.users", this.props.users);
        return (
            <div className={`preloader-component text-center pt-5 ${this.props.loading && "loading"}`}>
                {this.props.loading && <img src={loaderImage}/>}
                <div className={this.props.loading ? "hidden" : ""}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ loading: state.users.isLoading, users: state.users.usersList }),
)(Preloader);