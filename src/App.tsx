import * as React from "react";
import "assets/scss/App.scss";
import Header from "./components/Header/index";
import Preloader from "./hoc/Preloader/index";
import store from "./store";
import {Provider} from "react-redux";
import HomePage from "./views/Home";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <Provider store={store}>
                <div className="app-component">
                    <Header/>
                    <Preloader>
                        <HomePage/>
                    </Preloader>
                </div>
            </Provider>
        );
    }
}
