import React from "react";
import "./App.css";
import EmployeeSearchResults from "./components/EmployeeSearchResults";

function App() {
  return (
    
    <div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">EMPLOYEE DIRECTORY</h1>
          <p class="lead">
            Click on carrots to filter by heading or use the search box to
            narrow your results
          </p>
        </div>
      </div>

      <nav class="navbar navbar-light bg-light">
        {/*<SearchBox />*/} 
        <EmployeeSearchResults />
        </nav>
    </div>
  );
}

export default App;
