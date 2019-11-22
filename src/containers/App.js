import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import Header from "../components/Header"
import MainForm from "../components/MainForm";
import Favorites from "../components/Favorites";

const API_KEY = 'rXX6gRAGas7dEvJyz21j3Z6pWMRKaJnk';

class App extends React.Component{


  render() {
    return(
        <div className={"App"}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/favorites">
                        <Favorites />
                    </Route>
                    <Route exact path="/:cityKey?">
                        <MainForm />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App
