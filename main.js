
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

const changeImagesD6 = function (randomNum, dice) {
  if (randomNum === 1) {
    dice.src = 'images/d6/1.png'
  }
  if (randomNum === 2) {
    dice.src = 'images/d6/2.png'
  }
  if (randomNum === 3) {
    dice.src = 'images/d6/3.png'
  }
  if (randomNum === 4) {
    dice.src = 'images/d6/4.png'
  }
  if (randomNum === 5) {
    dice.src = 'images/d6/5.png'
  }
  if (randomNum === 6) {
    dice.src = 'images/d6/6.png'
  }
}

const changeDiceNumber = function (randomNum, dice) {
  switch (randomNum) {
    case 1:
      dice.src = 'images/numbers/1.png'
      break;
    case 2:
      dice.src = 'images/numbers/2.png'
      break;
    case 3:
      dice.src = 'images/numbers/3.png'
      break;
    case 4:
      dice.src = 'images/numbers/4.png'
      break;
    case 5:
      dice.src = 'images/numbers/5.png'
      break;
    case 6:
      dice.src = 'images/numbers/6.png'
      break;
    case 7:
      dice.src = 'images/numbers/7.png'
      break;
    case 8:
      dice.src = 'images/numbers/8.png'
      break;
    case 9:
      dice.src = 'images/numbers/9.png'
      break;
    case 10:
      dice.src = 'images/numbers/10.png'
      break;
    case 11:
      dice.src = 'images/numbers/11.png'
      break;
    case 12:
      dice.src = 'images/numbers/12.png'
      break;
    case 13:
      dice.src = 'images/numbers/13.png'
      break;
    case 14:
      dice.src = 'images/numbers/14.png'
      break;
    case 15:
      dice.src = 'images/numbers/15.png'
      break;
    case 16:
      dice.src = 'images/numbers/16.png'
      break;
    case 17:
      dice.src = 'images/numbers/17.png'
      break;
    case 18:
      dice.src = 'images/numbers/18.png'
      break;
    case 19:
      dice.src = 'images/numbers/19.png'
      break;
    case 20:
      dice.src = 'images/numbers/20.png'
      break;
  }
}


/*******************
 * QUERY HTML ELEMENTS *
 *******************/
const d6 = document.querySelector('#d6-roll')
d6.src = 'images/start/d6.png'

const main = document.querySelector('main')
const double1 = document.querySelector('#double-d6-roll-1')
double1.src = 'images/start/d6.png'
const double2 = document.querySelector('#double-d6-roll-2')
double2.src = 'images/start/d6.png'

const d12 = document.querySelector('#d12-roll')
d12.src = 'images/start/d12.jpeg'

const d20 = document.querySelector('#d20-roll')
d20.src = 'images/start/d20.jpg'

const resetBtn = document.querySelector('#reset-button')
const meanD6 = document.querySelector('#d6-rolls-mean')
const medianD6 = document.querySelector('#d6-rolls-median')
const meanDoubleD6 = document.querySelector('#double-d6-rolls-mean')
const medianDoubleD6 = document.querySelector('#double-d6-rolls-median')
const meanD12 = document.querySelector('#d12-rolls-mean')
const medianD12 = document.querySelector('#d12-rolls-median')
const meanD20 = document.querySelector('#d20-rolls-mean')
const medianD20 = document.querySelector('#d20-rolls-median')


/*******************
 * EVENT LISTENERS *
 *******************/


 // Roll Dice 6
const rollD6 = function (event) {
  // Get random number
  let randomNum = getRandomNumber(6);
  changeImagesD6(randomNum, d6)
  // Push random numbers to an array
  sixes.push(randomNum)
  meanD6.innerText = getMean(sixes)
  medianD6.innerText = getMedian(sixes)
}
d6.addEventListener('click', rollD6)

// Roll Double D6
const rollDoubleD6 = function (event) {
  // Get 2 random numbers and sum them
  let randomNum1 = getRandomNumber(6)
  let randomNum2 = getRandomNumber(6)
  let sumOfRandomNumbers = randomNum1 + randomNum2

  // Change images of each dice according to the number
  changeImagesD6(randomNum1, double1)
  changeImagesD6(randomNum2, double2)

  // push sum of randoms number to an array for mean, median and mode functions
  doubleSixes.push(sumOfRandomNumbers)
  meanDoubleD6.innerText = getMean(doubleSixes)
  medianDoubleD6.innerText = getMedian(doubleSixes)
}
double1.addEventListener('click', rollDoubleD6)
double2.addEventListener('click', rollDoubleD6)

// Roll Dice 12
const rollD12 = function (event) {
  const randomNum = getRandomNumber(12)
  changeDiceNumber(randomNum, d12)
  twelves.push(randomNum)
  meanD12.innerText = getMean(twelves)
  medianD12.innerText = getMedian(twelves)
}
d12.addEventListener('click', rollD12)

// Roll Dice 20
const rollD20 = function (event) {
  const randomNum = getRandomNumber(20)
  changeDiceNumber(randomNum, d20)
  twenties.push(randomNum)
  meanD20.innerText = getMean(twenties)
  medianD20.innerText = getMedian(twenties)
}
d20.addEventListener('click', rollD20)


/******************
 * RESET FUNCTION *
 ******************/

const clearAll = function(event) {
  // Empty ALl Arrays
  sixes.splice(0, sixes.length)
  doubleSixes.splice(0, doubleSixes.length)
  twelves.splice(0, twelves.length)
  twenties.splice(0, twenties.length)

  // Change ALl images of dices to starting images
  d6.src = 'images/start/d6.png'
  double1.src = 'images/start/d6.png'
  double2.src = 'images/start/d6.png'
  d12.src = 'images/start/d12.jpeg'
  d20.src = 'images/start/d20.jpg'

  // Set All text of means, medians and modes to NA
  meanD6.innerText = 'NA'
  medianD6.innerText = 'NA'
  meanDoubleD6.innerText = 'NA'
  medianDoubleD6.innerText = 'NA'
  meanD12.innerText = 'NA'
  medianD12.innerText = 'NA'
  meanD20.innerText = 'NA'
  medianD20.innerText = 'NA'
}

resetBtn.addEventListener('click', clearAll) 

/****************
 * MATH SECTION *
 ****************/

const getMean = function (arr) {
  let sum = 0
  for (const num of arr) {
    sum += num
  }
  return Number((sum / arr.length).toFixed(2))
}


const getMedian = function (arr) {
  const sortArr = sortByNumber(arr)
  let median = 0
  if (sortArr.length % 2 === 1) {
    median = sortArr[Math.floor(sortArr.length / 2)]
  }
  else if (sortArr.length % 2 === 0) {
    let secondMiddle = sortArr[sortArr.length / 2]
    let firstMiddle = sortArr[sortArr.length / 2 - 1]
    median = (secondMiddle + firstMiddle) / 2
  }
  return median
}

