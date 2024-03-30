import React from "react";

function UserProfile () {
    return (
        <div className="user-profile-container">
            <img src="https://img.allfootballapp.com/www/M00/32/E1/720x-/-/-/CgAGVWL3youAYI0SAABn2mSU124473.jpg.webp" alt="profile-picture" className="img"/>
            <div className="user-profile__info-box">
            <h3>Kevin De Bruyne</h3>
            <h4>Midfielder</h4>
            <h5>Manchester City FC</h5>
            </div>
        </div>
    )
}

export default UserProfile;