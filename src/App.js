import React from "react";
import "./App.css";
import EmployeeSearchResults from "./components/EmployeeSearchResults";

function App() {
  return (
    
    <div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">EMPLOYEE DIRECTORY</h1>
          <p className="lead">
            Click on carrots to filter by heading or use the search box to
            narrow your results
          </p>
        </div>
      </div>

      <nav className="navbar navbar-light bg-light">
        {/*<SearchBox />*/} 
        <EmployeeSearchResults />
        </nav>
    </div>
  );
}

export default App;
