import React, { Component } from "react";
import API from "../utils/API";

class EmployeeSearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [], initialResults: [] };
    this.textInput = React.createRef();
  }

  async componentDidMount() {
    let res = await API.getUsers();
    this.setState({ results: res, initialResults: res });
  }

  searchEmployee = (query) => {
    API.searchUsers(query, this.state.initialResults)
      .then((res) => this.setState({ results: res }))
      .catch((err) => console.log(err));
  };

  onClick() {
    const searchText = this.textInput.current.value;
    this.searchEmployee(searchText.toLowerCase());
  }

  render() {
    return (
      <div>
        <input
          id="searchBox"
          className="form-control new-class mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          ref={this.textInput}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={(e) => this.onClick()}
        >
          Search
        </button>

        <div>
          {(this.state.results || []).map((r, index) => (
            <div key={index}>
              <img key={index + 1} alt="" src={r.picture.medium} />
              <p key={index + 2}>{r.name.first + " " + r.name.last}</p>
              <a key={index + 3} href={"mailto:" + r.email}>
                {r.email}
              </a>
              <p key={index + 4}>Phone: {r.cell || r.phone}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EmployeeSearchResults;
