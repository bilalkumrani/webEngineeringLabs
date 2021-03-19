let favoriteFoods = ["apple","banana","orange"];
console.log(favoriteFoods[1]);
favoriteFoods[favoriteFoods.length-1] = "newfood";
console.log(favoriteFoods);
let formerFavoriteFood = favoriteFoods.splice(0,1);
console.log(formerFavoriteFood);
favoriteFoods.push("Mango");
console.log(`added in last ${favoriteFoods}`);
favoriteFoods.unshift("apricot");
console.log(favoriteFoods);


let newPerson = [];
console.log(newPerson.pop());
// it will give undefined value if we pop from an empty array


let newArr = [2,3,4,5];
let newArr1 = newArr.splice(1,1);
console.log(newArr1);

