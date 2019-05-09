import React from "react";
import "bootstrap";

import Header from "../Header/header.jsx";
import ManagementDetails from "../ManagementDetails/management-details.jsx";
import SignIn from "../SignIn/sign_in.jsx";

class ManagementPage extends React.Component {
state = {
    signedIn: false,
}

    render() {
        return (
            <div>
                <Header />
                {!this.state.signedIn &&
                    <div className='row justify-content-center align-items-center'>
                    <div className='col'>
                        <SignIn />
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
