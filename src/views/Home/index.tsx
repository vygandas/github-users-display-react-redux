import * as React from "react";
import "./Home.scss";
import {getUsers, hideLoading} from "../../actions/users.actions";
import {connect} from "react-redux";
import {IUser} from "../../interfaces/IUser";
import {ProfileItem} from "../../components/ProfileItem/index";


export interface AppProps {
    usersList: IUser[];
    getUsers: typeof getUsers;
    hideLoading: typeof hideLoading;
    pathname: any;
}

class HomePage extends React.Component<AppProps, undefined> {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div className="home-page text-center p-5">
                <div className="user-profile-items">
                    {this.props.usersList && this.props.usersList.map((user, i) =>
                        <ProfileItem user={user}/>
                    )}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ usersList: state.users.usersList }),
    {getUsers, hideLoading}
)(HomePage);