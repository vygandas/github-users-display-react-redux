import * as React from "react";
import "./Home.scss";
import {getUsers, hideLoading} from "../../actions/users.actions";
import {connect} from "react-redux";
import {IUser} from "../../interfaces/IUser";
import {ProfileItem} from "../../components/ProfileItem/index";
import MoreButton from "../../components/MoreButton";

export interface HomePageProps {
    usersList: IUser[];
    lastUserId: number;
    getUsers: typeof getUsers;
    hideLoading: typeof hideLoading;
    pathname: any;
}

interface HomePageState {
    stickToId: number;
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = { stickToId: 0 };
    }
    componentDidMount(): void {
        this.props.getUsers();
    }
    componentDidUpdate(): void {
        if (this.state.stickToId > 0) {
            this.handleScrollToElement();
        }
    }
    handleScrollToElement = (): void => {
        const targetNode = document.getElementById(`profile-item-${this.state.stickToId}`);
        window.scrollTo(0, targetNode.offsetTop);
    }
    loadMoreClickHandler = (id: number): void => {
        this.setState({ stickToId: id });
    }
    render(): JSX.Element {
        return (
            <div className="home-page text-center p-5">
                <div className="user-profile-items">
                    {this.props.usersList && this.props.usersList.map((user, i) =>
                        <ProfileItem user={user}/>
                    )}
                </div>
                <MoreButton clickHandlerCallback={this.loadMoreClickHandler}/>
            </div>
        );
    }
}

export default connect(
    state => ({ usersList: state.users.usersList, lastUserId: state.users.lastUserId }),
    {getUsers, hideLoading}
)(HomePage);