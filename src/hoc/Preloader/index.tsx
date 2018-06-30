import * as React from "react";
import { connect } from "react-redux";
import "./Preloader.scss";
import {IUser} from "../../interfaces/IUser";

const loaderImage = require("assets/img/loader.gif");

export interface PreloaderProps {
    loading: boolean;
    users: IUser[];
}

/**
 * Preloader component is watching isLoading state property and displaying
 * loader animation or content components.
 * -
 * Don't place this component too far from components that are inside because this might not work properly.
 * More info https://github.com/gaearon/react-hot-loader/issues/650#issuecomment-334876998
 * */
class Preloader extends React.Component<PreloaderProps, undefined> {
    render() {
        return (
            <div className={`preloader-component text-center pt-5 ${this.props.loading && "loading"}`}>
                {this.props.loading && <img src={loaderImage} className="my-5"/>}
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