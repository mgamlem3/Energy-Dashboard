import React from "react";
import "bootstrap";

import Header from "../Header/header.jsx";
import ManagementDetails from "../ManagementDetails/management-details.jsx";
import SignIn from "../SignIn/sign_in.jsx";

class ManagementPage extends React.Component {
    state = {
        signedIn: false,
    }

    signIn = () => {
        this.setState({signedIn: true});
        console.log("Signed in");
    }

    render() {
        return (
            <div>
                <Header />
                {!this.state.signedIn &&
                    <div className='row justify-content-center align-items-center'>
                    <div className='col'>
                        <SignIn onSignInSuccessful={this.signIn}/>
                    </div>
                </div>
                }
                {this.state.signedIn &&
                    <ManagementDetails />
                }
            </div>
        );
    }
}

export default ManagementPage;
