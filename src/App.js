import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import NavBar from "./components/navbar";
import GoToTop from "./components/gototop";
import Project1 from "./pages/project1";

function App() {


    return (  
        <div className="container">
            <NavBar/>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route exact path = "/about" component={About}/>
                <Route exact path = "/resume" component={Resume}/>
                <Route exact path = "/contact" component={Contact}/>
                <Route exact path = "/project1" component={Project1} />
            </Switch>   
            <GoToTop/>
        </div>
    );
}

export default App;