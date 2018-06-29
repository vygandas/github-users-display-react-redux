import * as React from "react";
import {connect} from "react-redux";

export interface AppProps {
    errorMessage: string;
}

class ErrorMessage extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="error-message-component">
                {this.props.errorMessage && this.props.errorMessage !== "" &&
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Error!</h4>
                        <p>{this.props.errorMessage}</p>
                    </div>
                }
            </div>
        );
    }
}

export default connect(
    state => ({ errorMessage: state.users.errorMessage })
)(ErrorMessage);