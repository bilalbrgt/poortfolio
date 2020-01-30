import React  from 'react';
import{BrowserRouter,Switch,Route}from "react-router-dom"

import './App.css';
import Image from "./Image";
import Navbar from "./components/Navbar";



function App() {
  return(
      <BrowserRouter>
    <div className="App">
    <Navbar/>
        <Switch>
            <Route exact path="/">
                
                <Image name="school_01"/>
            </Route>
            <Route  path="/programmes">
                <Image name="school_02"/>
            </Route>
            <Route  path="/contact">

                <Image name="school_03"/>
            </Route>
            <Route  path="/academy">

                <Image name="school_04"/>
            </Route>
        </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;




