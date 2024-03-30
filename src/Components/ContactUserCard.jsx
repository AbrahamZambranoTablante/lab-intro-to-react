import React from "react";

function ContactCard () {
    return (
        <div className="contact-card">
            <img src="./src/profile.png" alt="profile-picture" className="img"/>
            <div className="contact-card__info-box">
                <h3>Romelu Lukaku</h3>
                <h4>Striker</h4>
                <h5>AS Roma</h5>
            </div>
        </div>
    )
}

export default ContactCard;