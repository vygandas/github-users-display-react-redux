import * as React from "react";
import "assets/scss/App.scss";

const reactLogo = require("assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <h1>Hello GitHub profile viewer!</h1>
                <p>There will be a lis of GitHub users</p>
                <img src={reactLogo} height="480"/>
            </div>
        );
    }
}
