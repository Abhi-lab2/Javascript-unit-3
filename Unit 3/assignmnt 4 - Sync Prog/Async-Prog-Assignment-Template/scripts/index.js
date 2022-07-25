//For the slideshow of random movie image
var i = 0; // Start Point
var images = []; // Images Array - (empty arr)
var time = 2000; // Time req.. to scroll

// Image List
images[0] =
  "https://media.istockphoto.com/photos/woman-relaxing-at-home-in-evening-and-watching-tv-picture-id1317927924?b=1&k=20&m=1317927924&s=170667a&w=0&h=09B4U0h93nTHY9liyj_xwAwQAKkYvkC9y3ZgEM1uba4=";
images[1] =
  "https://almightygoatman.files.wordpress.com/2019/07/onceuponatimeinhollywood2019a.jpg?w=1200";
images[2] =
  "https://filmyninja.com/wp-content/uploads/2021/03/filmyzilla.-latest.jpg";
images[3] = "https://cdn.mos.cms.futurecdn.net/QFuzEB2Gxth6qQT8Tpe7LN.jpg";

// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check for max
  if (i < images.length - 1) {
    // Addn 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }
  // Run function every _ seconds
  setTimeout("changeImg()", 2000);
}
// Run function when page loads
window.onload = changeImg;
//---------------------------------------------

//Data
var cards = [
  {
    image:
      "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg",
    name: "Jai Bhim",
    desc: "Drama",
    ratings: "&#9733;",
  },
];
cards.map((item) => {
  var cardBox = document.createElement("div");

  var imageDiv = document.createElement("div");

  var img = document.createElement("img");
  img.setAttribute("src", item.image);
  img.setAttribute("id", "cardImage");

  var names = document.createElement("p");
  names.textContent = item.name;
  names.setAttribute("id", "names");

  var desc = document.createElement("p");
  desc.textContent = item.desc;
  desc.setAttribute("id", "desc");

  var rating = document.createElement("h4");
  rating.textContent = item.ratings;
  rating.setAttribute("id", "ratings");

  imageDiv.append(img), cardBox.append(img, names, desc, rating);
  document.querySelector("#cardsContainer").append(cardBox);
});

//Sorting Button Feature

// document.querySelector("#movies").addEventListener("change", () => {
//     var sortType = document.querySelector("#nameSelect").value;
//     if (sortType == "a-z") {
//         var sortedArr = data.sort((a, b) => {
//             return a.name.localeCompare(b.name);
//         });
//         createCards(sortedArr);
//     }
//     else if (sortType == "z-a") {
//         var sortedArr = data.sort((a, b) => {
//             return b.name.localeCompare(a.name);
//         });
//         createCards(sortedArr);
//     }
// });
