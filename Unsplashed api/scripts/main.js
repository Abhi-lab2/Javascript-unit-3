//Make an ApI Call and return Data

async function makeAPICall(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
}

function appendPic(data, parent) {
  data.forEach((element) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = element.urls.small;
    image.setAttribute("class", "box");

    let p = document.createElement("p");
    p.innerText = element.user.name;
    p.setAttribute("class", "p");

    div.append(image, p);
    //to give the id to each image divs for styling
    div.id = "picture";

    //To show image into local storege after clicking so that it can be used into next page
    div.onclick = () => {
      localStorage.setItem("elem", JSON.stringify(element));
    };

    parent.append(div);
  });
}

export { makeAPICall, appendPic };
