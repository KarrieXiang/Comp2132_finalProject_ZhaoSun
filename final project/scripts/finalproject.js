let numClick = 0;
let myTotal = [];
let opponentTotal = [];
let roundScoreValue;

const popup = document.getElementById("pop-up");
const closePopup = document.getElementById("close-pop-up");

const diceImagemy1 = document.getElementById("myDice1");
const diceImagemy2 = document.getElementById("myDice2");
const diceImage1 = document.getElementById("opponentsDice1");
const diceImage2 = document.getElementById("opponentsDice2");

const myScoreThisRound = document.getElementById("myScoreThisRound");
const opponentScoreThisRound = document.getElementById(
  "opponentScoreThisRound"
);
const myTotalScore = document.getElementById("myTotalScore");
const opponentTotalScore = document.getElementById("opponentTotalScore");
const youWin = document.getElementById("youWin");
const youLose = document.getElementById("youLose");
const equal = document.getElementById("equal");

function totalValue(arr) {
  let TotalValue = 0;
  for (i = 0; i < arr.length; i++) {
    TotalValue += arr[i];
  }
  console.log(TotalValue);
  return TotalValue;
}

function roundScore(num1, num2) {
  if (num1 == 1 || num2 == 1) {
    roundScoreValue = 0;
  } else if (num1 == num2) {
    roundScoreValue = (num1 + num2) * 2;
  } else {
    roundScoreValue = num1 + num2;
  }
  return roundScoreValue;
}

//random image
btnRoll = document.getElementById("btnRoll");
btnRoll.addEventListener("click", function (e) {
  //score
  let max = 6;
  let min = 1;
  let difference = max - min;
  let myramNum1 = Math.round(Math.random() * difference) + min;
  let myramNum2 = Math.round(Math.random() * difference) + min;
  let ramNum1 = Math.round(Math.random() * difference) + min;
  let ramNum2 = Math.round(Math.random() * difference) + min;
  let myScore;
  myScore = roundScore(myramNum1,myramNum2);
  // console.log(myScore);
  let opponentScore;
  opponentScore  = roundScore(ramNum1, ramNum2);
  //console.log(opponentScore);
  myTotal.push(myScore);
  console.log(myTotal);
  opponentTotal.push(opponentScore);
  console.log(opponentTotal);
  myScoreThisRound.innerHTML = myScore;
  opponentScoreThisRound.innerHTML = opponentScore;
  myTotalScore.innerHTML = totalValue(myTotal);
  opponentTotalScore.innerHTML = totalValue(opponentTotal);

  //change image

  diceImagemy1.setAttribute("src", `images/Alea_${myramNum1}.png`);
  diceImagemy2.setAttribute("src", `images/Alea_${myramNum2}.png`);
  diceImage1.setAttribute("src", `images/Alea_${ramNum1}.png`);
  diceImage2.setAttribute("src", `images/Alea_${ramNum2}.png`);

  numClick++;
  console.log(numClick);
  if (numClick == 3) {
    numClick = 0;
    popup.classList.remove("show");
    btnRoll.disabled = true;
    if (totalValue(myTotal) > totalValue(opponentTotal)) {
      youWin.classList.remove("show");
    } else if (totalValue(myTotal) == totalValue(opponentTotal)) {
      equal.classList.remove("show");
    } else {
      youLose.classList.remove("show");
    }
  }
});

//toggle list 1
const $listHow = $("#listHow");
const $hideHow = $("#hideHow");

$hideHow.click(function () {
  $listHow.slideToggle(200);
});

//toggle list 2
$listRules = $("#listRules");
$hideRules = $("#hideRules");

//listen for clicks on the menu button
$hideRules.click(function () {
  //on the 'nav' element, toggle on/off the .show class
  $listRules.slideToggle(200);
});

//closePopup
closePopup.addEventListener("click", function () {
  popup.classList.add("show");
  youLose.classList.add("show");
  youWin.classList.add("show");
  equal.classList.add("show");
});

//new game
btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click", function (e) {
  diceImagemy1.setAttribute("src", ``);
  diceImagemy2.setAttribute("src", ``);
  diceImage1.setAttribute("src", ``);
  diceImage2.setAttribute("src", ``);
  myScoreThisRound.innerHTML = "Score";
  opponentScoreThisRound.innerHTML = "Score";
  myTotalScore.innerHTML = "Score";
  opponentTotalScore.innerHTML = "Score";
  btnRoll.disabled = false;
  myTotal = [];
  opponentTotal = [];
});
