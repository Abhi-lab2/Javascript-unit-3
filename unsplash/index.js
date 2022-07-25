import sidebar from "./components/sidebar.js";
console.log("sidebar:", sidebar);

import { makeAPICall, appendpictures } from "./scripts/main.js";

let sidebar_div = document.getElementById("sidebar");
sidebar_div.innerHTML = sidebar();

let res = await makeAPICall(
  "https://api.unsplash.com/photos/?client_id=2wLhJG2aVmR1eg0HurAsgh6VukpNe2Sh8nejxihes_U"
);
console.log("res:", res);

let parents = document.getElementById("main");
appendpictures(res, parents);

let input = document.getElementById("searchbar");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let input_value = document.getElementById("searchbar").value;

    localStorage.setItem("search_term", input_value);

    window.location.href = "search.html";
  }
});
