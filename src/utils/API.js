import axios from "axios";

export default {
  // Gets all users
  getUsers: async function () {
    let res = await axios.get("https://randomuser.me/api/?results=200&nat=us");
    return res.data.results;
  },
  searchUsers: async function (searchText, results) {
    let searchedUsers = results.filter(
      (r) =>
        r.name.first.toLowerCase().includes(searchText) ||
        r.name.last.toLowerCase().includes(searchText) ||
        r.email.toLowerCase().includes(searchText)
    );
    return searchedUsers;
  },
};
