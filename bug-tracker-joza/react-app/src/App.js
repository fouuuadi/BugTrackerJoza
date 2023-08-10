import React, {useEffect} from "react";
import "./App.scss";
import BugTrackerRouter from "./components/router/RoutingApi";

function App() {

    useEffect(() => {
        console.log(process.env.REACT_APP_API_URL)
    }, [])

    //Render
    return (
        <div className="App">
            <BugTrackerRouter/>
        </div>);
}

export default App;
