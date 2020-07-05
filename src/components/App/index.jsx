import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Landing from '../Landing';
import Welcome from '../Welcome';
import SignUp from '../SignUp';
import Login from '../Login';
import ErrorPage from '../Error-Page';
import Footer from '../Footer';
import '../../App.css';




function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer/> 
    </Router>
  );
}

export default App;
