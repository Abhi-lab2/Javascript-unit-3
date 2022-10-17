let displayPuppy = document.getElementById("displaySearch");

async function getData() {
  var Input = document.querySelector("#inputval").value;
  console.log(Input);
  var url = `https://dog.ceo/api/breed/${Input}/images`;
  var res = await fetch(url);
  var data = await res.json();
  console.log(Input);
  console.log(data);
}

getData();

const displayData = (data) => {
  displaySearch.innerHTML = "";
  data.message.map((i) => {
    let Card = document.createElement("div");
    Card.setAttribute("id", "Imgcard");

    var image = document.createElement("img");
    image.setAttribute("src", i);

    Card.append(image);
    displaySearch.append(Card);
  });
};

function display(fun, delay) {
  setTimeout(() => {
    fun();
  }, delay);
}
