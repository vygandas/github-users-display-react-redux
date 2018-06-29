import * as React from "react";
import "./Preloader.scss";

const loaderImage = require("assets/img/loader.gif");

export interface AppProps {
}

/**
 * Preloader component is watching isLoading state property and displaying
 * loader animation or content components.
 * */
export default class Preloader extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className={`preloader-component text-center pt-5 ${false && "loading"}`}>
                {true && this.props.children}
            </div>
        );
    }
}
