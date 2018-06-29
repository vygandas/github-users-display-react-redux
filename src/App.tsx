import * as React from "react";
import "assets/scss/App.scss";
import Header from "./components/Header/index";
import ErrorMessage from "./components/ErrorMessage";
import store from "./store";
import {Provider} from "react-redux";
import HomePage from "./views/Home";
import ProfilePage from "./views/Profile";
import { HashRouter, Switch, Route, IndexRoute } from "react-router-dom";
import Preloader from "./hoc/Preloader/index";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <Provider store={store}>
                <div className="app-component">
                    <Header/>
                    <ErrorMessage/>
                    <Preloader>
                        <HashRouter>
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                {/*<IndexRoute component={HomePage} />*/}
                                <Route path="/:username" component={ProfilePage}/>
                            </Switch>
                        </HashRouter>
                    </Preloader>
                </div>
            </Provider>
        );
    }
}
