import * as React from "react";
import "./Header.scss";

const mainLogo = require("assets/img/logo.png");

export interface HeaderProps {
}

export const Header = (props: HeaderProps): JSX.Element => {
    return (
        <div className="header-component text-center pt-5">
            <img src={mainLogo} height={211} width={213}/>
            <h1 className="h2 mt-3 text-shadow-md">GitHub profiles viewer!</h1>
            <p>Welcome! Feel free to browse any profiles from GitHub API!</p>
        </div>
    );
};
