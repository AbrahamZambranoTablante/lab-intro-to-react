import './App.css'
import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
function App() {

  const players = [
    {name: "Romelu Lukaku", position: "Striker", team: "AS Roma", profilePicture: "https://media.asroma.com/prod/images/square_large_fill/c431a82a89dd-5be9a56f0985-lukaku-copia.png"},
    {name: "Daniel Carvajal", position: "Defender", team: "Real Madrid CF", profilePicture: "https://img.uefa.com/imgml/TP/players/1/2024/324x324/250024448.jpg"},
    {name: "Florian Wirtz", position: "Midfielder", team: "Bayern 04 Leverkusen", profilePicture: "https://assets.bundesliga.com/player/dfl-obj-002gbk-dfl-clu-00000b-dfl-sea-0001k7.png"},
    {name: "Diogo Costa", position: "Goalkeeper", team: "FC Porto", profilePicture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQF9GtF0Gr3ZRsfhyNtSwXa6-CRkVbikMsO9DeCjA0MCH1mKXpu"},
  ]

  const posts = [
    {title: "Individual Awards 2022/2023", description: "Premier League 'Best Player' // Premier League 'Best Midfielder // UCL 'Best Midfielder'"},
    {title: "Trophies 2022/2023", description: "Uefa Champions League Cup // Premier League Cup"},
    {title: "Stats 2022/2023", description: "Games: 49 // Goals scored: 10 // Assists: 31 // Yellow Cards: 2 // Red Cards: 0"}
  ]


  return (
    <>
    <header><NavBar className="nav-bar-container" /></header>
    <main>
    <UserProfile className="user-profile-container"/>
    <Posts className="Posts-container" posts={posts}/>
    <Contacts className="contacts-container" players={players}/>
    </main>
    </>
  );
}

export default App;
