
export default function calculatePlates(desiredWeights, masterPlateInventory) {
  let bar = 45;
  let neededWeights = (desiredWeights - bar) / 2;
  let totalPlates = 0;
  let platesIUsed = [];
  var plateInventory = (masterPlateInventory.slice());
  
// neededWeights hold the all the plates to put on one side of the bar. 
// console.log(`You are lifting ${desiredWeights} total Pounds`);

plateInventory.sort((a, b) => a.weight - b.weight);

// console.log('I need '+ neededWeights +' lbs on one side of the bar. ');
while(neededWeights > 0 && plateInventory.length > 0){
    var WeightObject = plateInventory.pop();

    var tempWeightObject = {weight: WeightObject.weight, inventory: WeightObject.inventory, color: WeightObject.color};
    
    if (neededWeights >= WeightObject.weight && WeightObject.inventory > 0) {
      tempWeightObject.inventory = tempWeightObject.inventory - 1; // Change this to your copy
      if (tempWeightObject.inventory > 0){
        plateInventory.push(tempWeightObject); // Change this to your copy
      }
      neededWeights = neededWeights - WeightObject.weight;
      totalPlates = totalPlates + WeightObject.weight * 2;
      platesIUsed.push(WeightObject);
      console.log("I just pushed " + WeightObject.id + " onto the array. Color:" + WeightObject.color);
    }
  }

console.log('I am done with the loop & i still need ' + neededWeights);
console.log(`I have ${totalPlates} lbs on the bar for a total of `+ (totalPlates + bar) + ' lbs ');

platesIUsed.forEach(function(item, index, array) {
  let color = "color: " + item.color;  
  console.log('%c'+ item.weight , color);
}); 
platesIUsed.forEach(function(item, index, array) {
 
  console.log(item.color);

  });

platesIUsed.map(plate =>
  console.log(plate.id + " Weight:" + plate.weight + " color:" + plate.color)
);

  var totalWeightUsed = totalPlates + bar;
  console.log("inside calculate function, platesIUsed has " + platesIUsed.length + ' records');

  var message = '';
  if (desiredWeights <= totalWeightUsed) {
    message = '';
   } else {
    message ='Sorry, you do not have enough weight to do this lift.';
   }
  
  return {platesIUsed, totalWeightUsed, message};
  
}
