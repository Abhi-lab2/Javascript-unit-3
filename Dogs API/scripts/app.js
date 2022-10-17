let puppyArray = document.getElementById("resultsDiv");
let bag = [];
// try - catch blck
const searchData = async () => {
  try {
    let results = await fetch(`https://dog.ceo/api/breeds/list/all`);
    let data = await results.json();
    // for (let i = 0; i < results.length; i++) {
    //   const getopt = document.createElement("getopt");
    //   getopt.innerText = results[i];
    //   select.append(getopt);
    // }
    for (key in data.message) {
      bag.push(key);
    }
    console.log(bag);
    displayData(bag);
  } catch (err) {
    console.log(err);
  }
};
searchData();

const displayData = (bag) => {
  puppyArray.innerHTML = ""; // continr

  bag.map((puppyBread) => {
    let puppyInfo = document.createElement("div");
    puppyInfo.setAttribute("id", "puppyInfoDataCSS");
    puppyInfo.addEventListener("click", () => {
      showPuppyImgInfo(puppyBread);
    });

    let title = document.createElement("p");
    title.textContent = puppyBread;
    title.setAttribute("id", "title");

    puppyInfo.append(title);
    puppyArray.append(puppyInfo);
  });
};
var puppyArr = [];
const showPuppyImgInfo = (puppyInfo) => {

  let container = puppyInfo;
  console.log(container);
  puppyArr.push(container);

  //   locl strge

  localStorage.setItem("puppyName", JSON.stringify(puppyArr));
  //   location to go to
  window.location.href = "puppy.html";
};
