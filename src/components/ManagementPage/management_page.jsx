import React from "react";
import "bootstrap";

import Header from "../Header/header.jsx";
import ManagementList from "../ManagementSidebar/management-sidebar.jsx";
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
                    <div className='d-flex flex-row no-gutters'>
                    <div className='col-sm-3'>
                        <ManagementList />
                    </div>
                    <div className='col-sm-9'>
                        <ManagementDetails />
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default ManagementPage;
