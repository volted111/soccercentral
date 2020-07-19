import React from 'react';

// component imports
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ALeagueTeam } from "./components/ALeagueTeam"


function App() {
    return (
        <div className="App">
            <Header/>
            <ALeagueTeam/>
            <Footer/>
            
        </div>
    );
}

export default App;
