import * as React from "react";
import {connect} from "react-redux";
import {getUsers} from "../../actions/users.actions";

export interface AppProps {
    since: number;
    getUsers: typeof getUsers;
    clickHandlerCallback: (id: number) => {};
}

class MoreButton extends React.Component<AppProps, undefined> {
    handleClick = () => {
        this.props.getUsers(this.props.since);
        this.props.clickHandlerCallback(this.props.since);
    }
    render() {
        return (
            <div className="more-button-component">
                <button
                    className="btn btn-danger btn-lg mt-3"
                    onClick={this.handleClick}
                >Load more users</button>
            </div>
        );
    }
}

export default connect(
    state => ({ since: state.users.lastUserId }),
    {getUsers}
)(MoreButton);