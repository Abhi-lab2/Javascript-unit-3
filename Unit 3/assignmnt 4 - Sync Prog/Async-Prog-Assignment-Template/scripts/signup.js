document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    var input1 = document.querySelector(".name").value;
    var input2 = document.querySelector("#mbl").value;
    var input3 = document.querySelector("#email").value;
    var input4 = document.querySelector("#pass").value;
  
    if(input1 == ""){
      alert("Name must be filled out");
    }
    else if(input2 == ""){
      alert("Mobile Number must be filled out");
    }
    else if(input3 == ""){
      alert("Email Id must be filled out");
    }
    else if(input4 == ""){
      alert("Enter Password");
    }
    else if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
        window.location.href = "login.html";
    }
  });