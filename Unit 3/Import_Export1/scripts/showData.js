// const search = document.querySelector("#input-box");
// search.addEventListener("keypress", setQuery);

// function setQuery(evt) {
//   if (evt.keyCode == 13) {
//     getData(search.value);
//   }
// }

async function getData(url) {
  //let food = document.getElementById("input-box").value;
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
}

function appendData(data, main) {
  data.categories.forEach((el) => {
    let div = document.createElement("div");

    //Category
    let p = document.createElement("h4");
    p.innerText = el.strCategory;

    //Category Description
    let p1 = document.createElement("p");
    p1.innerText = el.strCategoryDescription;

    //Images
    let img = document.createElement("img");
    img.src = el.strCategoryThumb;

    div.append(img, p);
    main.append(div);
  });
}

function appendData1(data, main1) {
  data.meals.forEach((el) => {
    let div2 = document.createElement("div2");
    //console.log("div2: ", div2);

    let img1 = document.createElement("img");
    img1.src = el.strMealThumb;
    img1.setAttribute("class", "img1");

    let p2 = document.createElement("h2");
    p2.innerText = el.strMeal;
    p2.setAttribute("class", "head");

    let p3 = document.createElement("h3");
    p3.innerText = el.strCategory;
    p3.setAttribute("class", "para");

    let p4 = document.createElement("h4");
    p4.innerText = el.strArea;
    p4.setAttribute("class", "para2");

    let s1 = document.createElement("p");
    s1.innerText = el.strInstructions;
    s1.setAttribute("class", "sentence");

    div2.append(img1, p2, p3, p4, s1);
    main1.append(div2);
  });
}


export { getData, appendData, appendData1 };
