// let url = "http://www.omdbapi.com/?i=tt3896198&apikey=1d8314b1";

const search = document.querySelector("#search");
search.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getMovies(search.value);
  }
}

async function getMovies() {
  let movie = document.getElementById("search").value;
  try {
    let res = await fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${movie}`);

    let data = await res.json();
    appendMovies(data);

    // console.log("data: ", data);
  } catch (err) {
    console.log("err: ", err);
  }
}
getMovies();

 //let movies_bag = document.getElementById("data");

function appendMovies(data) {
  //console.log("data: ", data);
  document.querySelector("#movies_empty").textContent = "";

  data.Search.forEach((el) => {
    var div = document.createElement("div");

    let img = document.createElement("img");
    //img.setAttribute("class", "img2");
    img.src = el.Poster;

    let title = document.createElement("h3");
    title.setAttribute("class", "t1");
    title.innerText = el.Title;

    let year = document.createElement("h4");
    year.setAttribute("class", "t1");
    year.innerText = el.Year;

    let rating = document.createElement("p");
    rating.setAttribute("class", "t1");
    rating.innerText = el.imdbVotes;

    div.append(img, title, year, rating);

    container.append(div);
  });
}
