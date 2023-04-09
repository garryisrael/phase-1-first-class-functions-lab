const returnFirstTwoDrivers = (function (arr){
  let newArray = [];
  newArray = arr.slice(0,2);
  return newArray;
});

const returnLastTwoDrivers = (function (arr){
  let newArray = [];
  newArray = arr.slice(-2);
  return newArray;
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
  const newFunction = fare => fare *num;
  return newFunction;
}

let fare;
const fareDoubler = createFareMultiplier(2);
const val =fareDoubler(fare);
console.log(val);

const fareTripler = createFareMultiplier(3);
const num =fareTripler(fare);
console.log(num);
 
function selectDifferentDrivers(arr, returnFirstTwoDrivers){
   const val = returnFirstTwoDrivers(arr);
   return val;
}

