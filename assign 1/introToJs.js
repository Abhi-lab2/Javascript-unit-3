// 1. Create an array and use .splice() and .slice() built in array methods on them. and 
// Explain the difference in terms of Immutability in comments.

var arr = ["Raju", "Shyamu", "Deep", "Joy", "Harry", "Merwan"];
arr.splice(1,0,"Jagmohan")
console.log(arr);
// .Slice() method basically changes the inner content of the array by adding or removing elements from an Array.
// There can be 1 or 2 items passed - the arguments like (1,0,"Jagmohan") can be passed-in and 
// will be added to the array
// We can Splice() method in various ways - by passing single arguments to remove an element like that.

arr.slice(2)
console.log(arr)
//The slice method returns a new array with a copied slice from the original array. 
// The first arrgument is an optional and is at starting index,
// and second optional argumant is at the last index position. If no aruguments passsd the will get complete array.
//------------------------------------------------------------------------------------------------------------------

//2. Explain the difference between Object.freeze() and const. Write relevant code and add comments.
var data = {
    name : "joy",
    age : 28,
    number : "1234567890",
}
Object.freeze(data);
data.name = "Avengers"
console.log(data.name)
//A frozen object cannot be changed. It prevents us from adding, changing or deleting properties of an Object orArray
//Any changes tried can show TypeError.
const value = 400;

function num () {
    value = 950
}
function power (){
    value = 100;
}
console.log(value)
//Const is another keyword to declare a variable when we don't want to change the value of that var for the whole program.
//Const variable has block scope ie the value cannot be reassigned by same name and have diffenet values
// A const variable cannot be hoisted.
// A const variable creates refernce to its value.



//https://chat.whatsapp.com/JIJ0QahWlgiFqMQkBJLlC9