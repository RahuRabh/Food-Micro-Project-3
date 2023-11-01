const foodData = require('./food.json');

// 1. list all the food items
foodData.forEach(data => {
    console.log(data.foodname);
})

// 2. list all food items with category vegetables
foodData.forEach(data => {
    if(data.category === "Vegetable"){
        console.log(data.foodname);
    }
})

console.log("***************");

// 3. list all food items with category fruit
foodData.forEach(data => {
    if(data.category === "Fruit"){
        console.log(data.foodname);
    }
})

// 4. list all food items with category protein
foodData.forEach(data => {
    if(data.category === "Protein"){
        console.log(data.foodname);
    }
})

console.log("***************");

// 5. list all food items with category nuts
foodData.forEach(data => {
    if(data.category === "Nuts"){
        console.log(data.foodname);
    }
})
console.log("***************");

// 6. list all food items with category grains
foodData.forEach(data => {
    if(data.category === "Grain"){
        console.log(data.foodname);
    }
})
console.log("***************");

// 7. list all food items with category dairy
foodData.forEach(data => {
    if(data.category === "Dairy"){
        console.log(data.foodname);
    }
})
console.log("***************");
// 8. list all food items with calorie above 100
foodData.forEach(data => {
    if(data.calorie > 100){
        console.log("Calories above 100:", data.foodname);
    }
})

// 9. list all food items with calorie below 100
foodData.forEach(data => {
    if(data.calorie < 100){
        console.log("Calories below 100:", data.foodname);
    }
})

// 10. List all food items with highest protein content to highest
foodData.sort((a,b) => b.protiens - a.protiens);
foodData.forEach(data => {
    console.log(`${data.foodname}: ${data.protiens}`);
})

console.log("Lowest cab to Highest");
// 11.list all the food items with lowest cab content to highest
foodData.sort((a,b) => a.cab - b.cab);
foodData.forEach(data => {
    console.log(`${data.foodname}: ${data.cab}`);
})