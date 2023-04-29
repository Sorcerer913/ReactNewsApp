import React from "react";
import "./App.css"
import {Redirect, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {MainPage} from './pages/MainPage'
import {PostPage} from "./pages/NewsViewPage";
import {NavigationComponent} from "./modules/Navigation";

function App() {



  return (
    <Router>
        <div className="App">
            <Route>
                <NavigationComponent/>
            </Route>

            <div className="container">
                <Route path="/">
                    <Redirect to="/1" />
                </Route>
                <Route exact={true} path={'/:pageNum'} children={<MainPage/>}/>
                <Route exact={true} path={'/post/:postNum'} children={<PostPage/>}/>
            </div>

        </div>
    </Router>
  );
}


export default App;
