import * as _ from 'underscore'

function sumFor(numbers){
  let total = 0;
  for (let i=0; i<numbers.length;i++){
    total+=numbers[i];
  }
  return total;
}

function sumWhile(numbers){
  let total = 0;
  let i = 0;
  while (numbers.length > i){
    total+=numbers[i];
    i++;
  }
  return total;
}

function sumRecursion(numbers){

  if (numbers.length === 0){
    return 0;
  }
  else {
    let data = numbers.pop;
    return sumRecursion(data);
  }
}

function sumTheSimpleWay(numbers){
  return _.reduce(numbers, function(memo, num){ return memo + num; });
}

let testData = [1,2,4,6];
console.log(sumFor(testData));
console.log(sumWhile(testData));
console.log(sumRecursion(testData));
console.log(sumTheSimpleWay(testData));
