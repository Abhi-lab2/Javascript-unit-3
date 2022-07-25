let W_icons = document.querySelector(".icons");
let locationIcon = document.querySelector(".location-icon");
let tempIcon = document.querySelector(".temp");
let desc = document.querySelector(".icons");
let weatherIcon = document.querySelector(".temp-desc p");
let loc = document.querySelector(".location p");
let notificationEle = document.querySelector(".alt");

const key = "fa92dc251d3944bd43705b1c6ad2ef81";

var input = document.getElementById("search");
let city = "";
let latitude = 0.0;
let longitude = 0.0;

input.addEventListener("keyup", function (event) {
  if ((event, keyCode == 13)) {
    event.preventDefault();

    city = input.ariaValue;
    getWeatherdata(city);
    console.log("city: ", city);
  }
});
const weather = {};

weather.temp = {
  unit: "celsius",
};
const kelvin = 273;

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, err);
} else {
  notificationEle.style.display = "block";
  notificationEle.innerHTML = <p>No geolocation</p>
}
function setPostion(position) {
    latitude = position.coords.latitude
    longitude = position.coords.longitude

    getWeather(latitude,longitude)
}
locationIcon.addEventListener("click",function(event) {
    console.log("working")

})
// async function getWeatherdata() {
//   try {
//     let city = document.getElementById("city");

//     let res = await fetch(
//       `https//:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
//     );

//     let data = await res.json();
//     // console.log("data: ", data);
//     showWeather(data)
//   } catch (err) {
//     console.log("err: ", err);
//   }
// }

// function showWeather(d) {
//     console.log('d: ', d);

//     container.innerHTML = null;

//     let name = document.createElement("p")
//     name.innerText = d.name;

//     let temp = document.createElement("p");
// }
