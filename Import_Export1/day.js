import navbar from "./components/navbar.js";
console.log("navbar: ", navbar);

import { getData, appendData1 } from "./scripts/showData.js";

let navbar_div = document.getElementById("nav-container");
navbar_div.innerHTML = navbar();

let url = "https://www.themealdb.com/api/json/v1/1/random.php";

let res = await getData(url);
console.log("res: ", res);

let main1 = document.getElementById("data");

appendData1(res, main1);
