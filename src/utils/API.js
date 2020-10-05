// import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };

import axios from "axios";
//import ramda from "ramda";
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
