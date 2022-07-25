// 1. Create UI Component and Export
// 2. Import NavBar
// 3. Append the Navbar
// 4. Get images using Fetch
// 5. Import Make API call

import sidebar from "./components/sidebar.js";

import { makeAPICall, appendPic } from "./scripts/main.js";

let sidebar_div = document.getElementById("sidebar");

sidebar_div.innerHTML = sidebar();

//returning from makeAPI call
let img_data = await makeAPICall(
  "https://api.unsplash.com/photos/?client_id=n_x-Pqn5A-Ik-gwBAAdx18rTfuKu7i08HUBZf1Yq4C4"
);
console.log("img_data:", img_data);

let parent = document.getElementById("main");

appendPic(img_data, parent);

// search functionality

let input = document.getElementById("searchbar");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let input_value = document.getElementById("searchbar").value;

    //transfer data from one HTML page to another HTML page...,
    //its already string so no need to Stingify it

    localStorage.setItem("search_term", input_value);

    window.location.href = "search.html";
  }
});
