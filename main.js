'use strict';

const picArray = [
  './images/Rock.jpg',
  './images/Scissors.jpg',
  './images/Paper.jpg'
];

const HAND_FORMS = [
  0,
  1,
  2
];

let enemyHand = 0;

//相手の手を表示//
function getImage() {
  const randomImage = Math.floor(Math.random() * picArray.length);
  enemyHand = randomImage;
  document.getElementById('pics').src = picArray[randomImage];

  if (randomImage == 0) {
    const paper = document.getElementById('paper');
    document.getElementById('pic-title').innerHTML = 'Din motstander valgte stein✊';
  } else if(randomImage == 1) {
    document.getElementById('pic-title').innerHTML = 'Din motstander valgte saks✌️';
  } else {
    document.getElementById('pic-title').innerHTML = 'Din motstander valgte papir✋';
  }
}
//

//自分が選んだ手の結果を表示//
function showMyHand() {
  const getResult = document.getElementById('result');    
  const rock = document.getElementById('rock');
  const scissors = document.getElementById('scissors');
  const paper = document.getElementById('paper');
  const restart = document.getElementById('restart'); 

  rock.addEventListener('click', function(event) {
    getResult.innerHTML = 'Du valgte stein✊';
    const getValue = event.target.value;
    console.log(getValue);
  })

  scissors.addEventListener('click', function(event) {
    getResult.innerHTML = 'Du valgte saks✌️';
    const getValue = event.target.value;
    console.log(getValue);
  })

  paper.addEventListener('click', function(event) {
    getResult.innerHTML = 'Du valgte papir✋';
    const getValue = event.target.value;
    console.log(getValue);
  })
   
  restart.addEventListener('click', function() {
    window.location.reload();
  });

  function onClick(event) {
    const myHandType = parseInt(event.target.value, 10);
    const enemyHandType = enemyHand;
    judge(myHandType, enemyHandType);
  }
  
  rock.addEventListener('click', onClick);
  scissors.addEventListener('click', onClick);
  paper.addEventListener('click', onClick);

}
showMyHand();
//


function judge(myHandType, enemyHandType) {
  const result = (myHandType - Math.abs(enemyHandType) + 3) % HAND_FORMS.length;
  const getResultContent = document.getElementById('result-content');
  if (result === 0) {
    getResultContent.innerHTML = 'Uavgjort🙂';
  } else if (result === 1) {
    getResultContent.innerHTML = 'Du tapte😭';
  } else {
    getResultContent.innerHTML = 'Du vant!🤗'
  }
  
}   
  





