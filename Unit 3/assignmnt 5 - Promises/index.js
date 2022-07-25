let queue = ["jack Ma", "tornald Luious", "Jeff Bezos", "Sundar pichai", "tom"];

function FoodReg() {
  let name = document.getElementById("name").value;

  queue.push(name);
  console.log("queue:", queue);

  let message = `${name} your Food has been booked and is getting ready`;

  alert(message);

  let promise = new Promise(function (resolve, reject) {
    setInterval(function () {
      if (queue[0] == name) {
        resolve(`${name} your order is Ready`);

        //clearInterval(interval);
      } else {
        reject("Restaurant Closed");
      }
    }, 1000);
  });

  promise.then(function (res) {
    alert(res);
  });
}

function startVaccination() {
  queue.shift(queue);
  if (queue.length === 0) {
    clearInterval(interval);
  }
}

var interval = setInterval(startVaccination, 2000);

// let queue = ["jack Ma","tornald Luious","Jeff Bezos","Sundar pichai"]

// function FoodReg() {

//     let init_status = "open";
//      //We took order as a food name.
//     let order = document.getElementById("order").value;

//     queue.push(order);
//     console.log('queue: ', queue);

//     let message = `${queue} your Food has been booked and is getting ready`;

//     alert(message);
//     //var time = Math.floor(Math.random() * 4);
//     let promise = new Promise(function(resolve, reject) {
//         setInterval(function () {
//             if(queue[0] == "order") {
//                     //if open then will get the order using Resolve
//                 resolve(`${order} your order is Ready`);
//             }
//                 //if not then wont place order
//             else {
//                 reject("Restaurant Closed")
//             }
//         }, 2000)       //time in ms
//     });
//     promise.then(function(res) {
//         console.log('res: ', res);
//         //console.log(res)
//         alert(res)
//     });
// }

// function foodOrdered() {
//     queue.shift(queue);
//     if (queue.length === 0) {
//       clearInterval(interval);
//     }
//   }

//   var interval = setInterval(foodOrdered, 2000);
