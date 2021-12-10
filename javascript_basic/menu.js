const meals = {
    breakfast: "Oatmeal",
    lunch: "Caesar salad",
    dinner: "Chimichangas",
  };
  
  let mealName = "lunch";
  
  //=> "Caesar salad"
  console.log(  meals[mealName]);

  const morningMeal = "breakfast";
const middayMeal = "lunch";
const eveningMeal = "dinner";

const meals1 = {
  morningMeal: "French toast",
  middayMeal: "Personal pizza",
  eveningMeal: "Fish and chips",
};

meals1;
//=> { morningMeal: "French toast", middayMeal: "Personal pizza", eveningMeal: "Fish and chips" }

let array2=[];
console.log(Object.keys(array2));

console.log(Object.keys({x: 0, y: 0, z: 2}));
