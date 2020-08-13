import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/HomePage';
import Dashboard from  './pages/dashboard/Dashboard';
import MentoringCircle from './pages/mentoring-circle/MentoringCircle';
import Search from './pages/search/Search';
import SignupPage from './pages/signup-page/SignupPage';
import './components/navbar.css'
import ExplorePage from './pages/explore/ExplorePage'
import "fontsource-roboto"

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/search' component={Search}/>
          <Route path='/signup' component={SignupPage}/>
          <Route path='/mentoringcircle' component={MentoringCircle}/>
          <Route path='/explore' component={ExplorePage}/>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
