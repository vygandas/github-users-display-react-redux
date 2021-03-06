import * as React from "react";
import {getUser} from "../../actions/users.actions";
import {connect} from "react-redux";
import {IUser} from "../../interfaces/IUser";
import {Link} from "react-router-dom";
import {event} from "../../helpers/gtag";
import "./Profile.scss";

export interface ProfilePageProps {
    user: IUser;
    getUser: typeof getUser;
    match: { params?: { username?: string } };
}

interface ProfilePageState {
    userNameQueried: string;
}

class ProfilePage extends React.Component<ProfilePageProps, ProfilePageState> {

    private currentUserLogin: string = null;

    constructor(props: ProfilePageProps) {
        super(props);
    }
    getUsername = (): string | null => {
        const p = this.props;
        return (typeof p !== typeof undefined
            && typeof p.match !== typeof undefined
            && typeof p.match.params !== typeof undefined
            && typeof p.match.params.username !== typeof undefined)
            ? this.props.match.params.username
            : null;
    }
    componentDidMount(): void {
        this.props.getUser(this.getUsername());
        this.currentUserLogin = this.getUsername();
    }
    componentDidUpdate(): void {
        const check = (
            this.props.user !== null
            && this.props.user.login !== this.getUsername()
            && this.currentUserLogin !== this.getUsername()
        );
        if (check) {
            this.props.getUser(this.getUsername());
            this.currentUserLogin = this.getUsername();
        }
    }
    render(): JSX.Element {
        return (
            <div className="profile-page pb-5">
                <div className="back-button-wrapper text-center pb-4">
                    <Link to={{ pathname: "/" }} onClick={() => event("profile_back_button", "click")}>&#8617; Back</Link>
                </div>
                {this.props.user &&
                    <div className="text-center">
                        <img
                            className="box-shadow-md img-fluid avatar-image"
                            src={this.props.user.avatar_url}
                            alt={this.props.user.login}
                        />
                        <article>
                            <h2 className="h4 display-md-3 pt-4 pb-0 pt-md-3 pb-md-3 text-shadow-md">
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
                                onClick={() => event("profile_github_url", "click", this.props.user.html_url)}
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