// Your code here
let saturdayFun = (a = "roller-skate") => {
  return `This Saturday, I want to ${a}!`
}

let mondayWork = (a = 'go to the office') => {
  return `This Monday, I will ${a}.`
}

let wrapAdjective = (cool = "*") => {
  return function(adjective = "special") {
    return `You are ${cool}${adjective}${cool}!`
  }
}

let Calculator = {
  add: function(a, b){return a + b},
  subtract: function(a, b){return a - b},
  multiply: function(a, b){return a * b},
  divide: function(a, b){return a / b}
}

let actionApplyer = (int, array) => {
  if(int == 13){int = 4}
  
  let a = int

  for (let i = 0; i < array.length; i++ ){
    a = array[i](int)
  }

  return a
}