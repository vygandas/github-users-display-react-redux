import * as React from "react";
import {connect} from "react-redux";
import {getUsers} from "../../actions/users.actions";
import {event} from "../../helpers/gtag";

export interface MoreButtonProps {
    since: number;
    getUsers: typeof getUsers;
    clickHandlerCallback: (id: number) => {};
}

class MoreButton extends React.Component<MoreButtonProps, undefined> {
    handleClick = () => {
        this.props.getUsers(this.props.since);
        this.props.clickHandlerCallback(this.props.since);
        event("load_more_button", "click");
    }
    render(): JSX.Element {
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