import * as React from "react";
import "assets/scss/App.scss";
import Header from "./Header/index";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app-component">
                <Header/>
            </div>
        );
    }
}
