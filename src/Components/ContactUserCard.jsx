import React from "react";

function ContactCard ({name, position, team, profilePicture}) {
    return (
        <div className="contact-card">
            <img src={profilePicture} alt="profile-picture" className="img"/>
            <div className="contact-card__info-box">
                <h3>{name}</h3>
                <h4>{position}</h4>
                <h5>{team}</h5>
            </div>
        </div>
    )
}

export default ContactCard;