let puppyNameArr = JSON.parse(localStorage.getItem("puppyName"));

let bag = puppyNameArr[puppyNameArr.length - 1]; // array.length-1

let searchResultDiv = document.getElementById("searchResultsMain");
let puppyMain = document.getElementById("puppyMain");

puppyMain.textContent = bag;   // text

const getImges = async () => {
  try {
    let res = await fetch(`https://dog.ceo/api/breed/${bag}/images`);
    let data = await res.json();
    let puppyImgs = data.message;

    // console.log(puppyImgs);
    displayData(puppyImgs);
  } catch (err) {
    console.log("error", err);
  }
};
getImges();

const displayData = (puppyPics) => {
  searchResultDiv.innerHTML = "";

  puppyPics.forEach((puppyImg) => {
    let puppyCard = document.createElement("div");
    puppyCard.setAttribute("id", "cardContainer");

    let Image = document.createElement("img");
    Image.src = puppyImg;

    puppyCard.append(Image);
    searchResultDiv.append(puppyCard);
  });
};
