import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact_Us, Notices, Policy_Documents, User_Category } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          //<Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/notices" exact component={() => <Notices/>} />
          <Route path="/Policy_documents" exact component={() => <Policy_Documents />} />
          <Route path="/contact_us" exact component={() => <Contact_Us />} />
          <Route path="/user_category" exact component={() => <User_Category/>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
