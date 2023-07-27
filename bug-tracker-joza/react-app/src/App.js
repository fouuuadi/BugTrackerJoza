import React from "react";
import "./App.scss";
import BugTrackerRouter from "./components/router/RoutingApi";
import HeaderPage from "./components/layout/header/HeaderPage";
import FooterPage from "./components/layout/footer/FooterPage";

function App() {


    //Render
    return (
        <div className="App">
        <BugTrackerRouter/>
    </div>);
}

export default App;
