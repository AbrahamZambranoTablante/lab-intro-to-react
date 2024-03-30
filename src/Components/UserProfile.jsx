import React from "react";

function UserProfile () {
    return (
        <div className="user-profile-container">
            <img src="./src/profile.png" alt="profile-picture" className="img"/>
            <div className="user-profile__info-box">
            <h3>Kevin De Bruyne</h3>
            <h4>Midfielder</h4>
            <h5>Manchester City FC</h5>
            </div>
            

        </div>
    )
}

export default UserProfile;