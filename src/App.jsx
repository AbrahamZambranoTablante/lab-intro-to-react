import './App.css'
import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
function App() {
  return (
    <>
    <header><NavBar className="nav-bar-container" /></header>
    <main>
    <UserProfile className="user-profile-container"/>
    <Posts className="Posts-container"/>
    <Contacts className="contacts-container"/>
    </main>
    </>
  );
}

export default App;
