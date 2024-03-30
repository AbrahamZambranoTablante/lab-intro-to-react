import React from "react";
import ContactCard from "./ContactUserCard";

function Contacts ({players}) {

    const fullCardInfo = players.map(ele => <ContactCard name={ele.name} position={ele.position} team={ele.team} profilePicture={ele.profilePicture}/>)

    return (
        <section className="contacts-container">
            <h3>Contacts</h3>
            <div>{fullCardInfo}</div> 
        </section>
    )
}

export default Contacts;