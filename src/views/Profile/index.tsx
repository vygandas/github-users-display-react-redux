import * as React from "react";
import "./Profile.scss";
import {getUser} from "../../actions/users.actions";
import {connect} from "react-redux";
import {IUser} from "../../interfaces/IUser";
import { Link } from "react-router-dom";

export interface AppProps {
    user: IUser;
    getUser: typeof getUser;
    match: { params?: { username?: string } };
}

class ProfilePage extends React.Component<AppProps, undefined> {
    constructor(props: AppProps) {
        super(props);
    }
    getUsername = () => {
        const p = this.props;
        return (typeof p !== typeof undefined
            && typeof p.match !== typeof undefined
            && typeof p.match.params !== typeof undefined
            && typeof p.match.params.username !== typeof undefined)
            ? this.props.match.params.username
            : null;
    }
    componentDidMount() {
        this.props.getUser(this.getUsername());
    }
    componentDidUpdate() {
        if (this.props.user !== null && this.props.user.login !== this.getUsername()) {
            this.props.getUser(this.getUsername());
        }
    }
    render() {
        return (
            <div className="profile-page pb-5">
                <div className="back-button-wrapper text-center pb-4">
                    <Link to={{ pathname: "/" }} >&#8617; Back</Link>
                </div>
                {this.props.user &&
                    <div className="text-center">
                        <img
                            className="box-shadow-md img-fluid avatar-image"
                            src={this.props.user.avatar_url}
                            alt={this.props.user.login}
                        />
                        <article>
                            <h2 className="display-3 py-3 text-shadow-md">
                                {this.props.user.login} <strong>#{this.props.user.id}</strong>
                            </h2>
                            {this.props.user.name &&
                                <h3 className="h4 py-3">
                                    {this.props.user.name}
                                </h3>
                            }
                            {this.props.user.company &&
                                <h3 className="h4 py-3">
                                    {this.props.user.company}
                                </h3>
                            }
                            <a
                                href={this.props.user.html_url}
                                target="_blank"
                                title={this.props.user.login}
                                className="h4"
                            >
                                {this.props.user.html_url}
                            </a>
                            {this.props.user.bio &&
                                <div className="card mt-5">
                                    <div className="card-body">
                                        <p className="card-text">{this.props.user.bio}</p>
                                    </div>
                                </div>
                            }
                        </article>
                    </div>
                }
            </div>
        );
    }
}

export default connect(
    state => ({ user: state.users.user }),
    {getUser}
)(ProfilePage);