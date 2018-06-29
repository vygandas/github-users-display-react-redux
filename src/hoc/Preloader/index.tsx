import * as React from "react";
import { connect } from "react-redux";
import "./Preloader.scss";

const loaderImage = require("assets/img/loader.gif");

export interface AppProps {
    loading: boolean;
}

/**
 * Preloader component is watching isLoading state property and displaying
 * loader animation or content components.
 * */
class Preloader extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className={`preloader-component text-center pt-5 ${this.props.loading && "loading"}`}>
                {!this.props.loading && this.props.children}
                {this.props.loading && <img src={loaderImage}/>}
            </div>
        );
    }
}

export default connect(
    state => ({ loading: state.users.isLoading }),
)(Preloader);