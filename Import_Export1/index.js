import navbar from "./components/navbar.js";
import { getData } from "./scripts/showData.js";
console.log("navbar: ", navbar);

let navbar_div = document.getElementById("nav-container");
navbar_div.innerHTML = navbar();

document.getElementById("search").addEventListener("click", () => {
  search();
});

var search = async function () {
  try {
    //console.log("hello")
    var search1 = document.querySelector("#input-box").value;
    console.log(search1);

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search1}`;

    let res = await getData(url);
    //printing data in console...
    console.log("res:", res);
    appendData2(res);
  } catch (err) {
    console.log("err:", err);
  }
};

function appendData2(data) {
  console.log("data:", data);

  document.querySelector("#data").innerHTML = "";
  data.meals.map(function (elem) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");

    var h3 = document.createElement("h1");
    h3.innerHTML = elem.strMeal;

    var img = document.createElement("img");
    img.src = elem.strMealThumb;
    img.setAttribute("class", "img");

    var area = document.createElement("p");
    area.innerHTML = elem.strArea;
    area.setAttribute("class", "area");

    box.append(img, h3, area);
    document.querySelector("#data").append(box);
  });
}
