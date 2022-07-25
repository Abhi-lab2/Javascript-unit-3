
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  var input1 = document.querySelector("#user").value;
  var input2 = document.querySelector("#pass").value;

  if(input1 == ""){
    alert("Name must be filled out");
  }
  else if(input2 == ""){
    alert("Password Required");
  }
  else if (input1 !== "" && input2 !== "") {
      window.location.href = "index.html";
  }
});

// document.querySelector("form").addEventListener("submit", login);

// var regdUsers = JSON.parse(localStorage.getItem("userDataBase")) || []

// function login(event) {
//   event.preventDefault();

//   var pass = document.querySelector("#pass").value;
//   var user = document.querySelector("#user").value;

//   for (var i = 0; i < regdUsers.length; i++) {

//     console.log(regdUsers[i].userName, regdUsers[i].passwd);

//     if (regdUsers[i].userName == user && regdUsers[i].passwd == pass) {

//       window.location.href = "index.html";

//     }
//   }
// }