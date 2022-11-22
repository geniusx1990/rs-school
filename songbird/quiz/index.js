import birdsData from '../assets/birds.js';


//console.log(birdsData[0][3])

const selectionBlock = document.querySelector('.answers_select');
const activePositon = document.querySelectorAll('.categories_item');
const answerContent = document.querySelector('.column-description')
const nameOfBird = document.querySelector('.secret_name');
const imageOfBird = document.querySelector('.secret_bird');
const nextLevel = document.querySelector('.next');
let scoreWindow = document.querySelector('.score');
let flag = false;
let stage = 0;
let elementValue;
let score = 0;
let scoreStage;


const playBtn = document.querySelector('.player_icon_question');


const audioQuestion = new Audio();
function playAudio() {
    audio.src = // ссылка на аудио-файл;
        audio.currentTime = 0;
    audio.play();
}

/* playBtn.addEventListener('click', () => {
    console.log('aa')

    playAudio();
}) */

clearData();
game(0);

nextLevel.addEventListener('click', () => {
    if (flag == true && stage < 6) {
        stage = stage + 1;
        console.log(stage)
        clearData();
        correctAnswer = getRandomNum(0, 5)
        setActivePosition(stage);
        flag = false
        //const buttonSelect = document.querySelectorAll('.item_button');
        game(stage);
        console.log('correctAnswer = ' + correctAnswer);
    }
})

function clearData() {

    
    elementValue = 0;
    nameOfBird.textContent = '****';
    imageOfBird.src = `../assets/img/secret-bird.jpg`;
    let deleteElements = document.querySelectorAll('.options_item');
    for (let i = 0; i < deleteElements.length; i++) {
        deleteElements[i].remove();
    }
    scoreStage = 5;



}

function fillData(stage) {
    for (let i = 0; i < birdsData[stage].length; i++) {
        let buttonAnswer = document.createElement('span');
        buttonAnswer.setAttribute('class', 'item_button');
        let option = document.createElement('span');
        option.setAttribute('class', 'option');
        option.innerText = birdsData[stage][i].name
        let answerOptions = document.createElement('li');
        answerOptions.setAttribute('class', 'options_item');
        answerOptions.setAttribute('id', i);

        selectionBlock.append(answerOptions)
        answerOptions.append(buttonAnswer)
        answerOptions.append(option)
    }
}





const audio = {
    TURN: new Audio('../assets/sound/turn.mp3'),
    WINN: new Audio('../assets/sound/game-win.mp3'),
};










function fillDescription() {
    const buttonSelect = document.querySelectorAll('.item_button');

    if (elementValue != correctAnswer) {
        buttonSelect[elementValue].classList.add('incorrect');

    } else {
        buttonSelect[elementValue].classList.add('correct');

    }

    answerContent.innerHTML = `
        <div class="answers__info info">
          <img src="${birdsData[stage][elementValue].image}" alt="${birdsData[stage][elementValue].name}" class="info__img">
          <div class="info__description">
              <div class="name">${birdsData[stage][elementValue].name}</div>
              <div class="name_latin">${birdsData[stage][elementValue].species}</div>
              <div class="player">
                  <div class="player_controls">
                      <div class="player_icon player_answer"></div>
                      <div class="player_progress-wrapper">
                          <div class="player_progress"></div>
                          <div class="player_time player_time_current"></div>
                          <div class="player_time player_time_length"></div>
                      </div>
                  </div>
                  <div class="player_volume volume">
                      <div class="volume_button volume_button"></div>
                      <div class="volume_slider">
                          <input class="volume_progress volume_progress_answer" type="range" min="0" max="100">
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div class="answers__text text"><p class="text_paragraph">${birdsData[stage][elementValue].description}</p></div>
        `
    audioQuestion.src = birdsData[stage][correctAnswer].audio;
    // console.log(audioQuestion)
}


function game(stage) {
    fillData(stage);
    scoreStage = 5;


    selectionBlock.addEventListener('click', (e) => {
        console.log(' TEST  ' + stage)
        const buttonSelect = document.querySelectorAll('.item_button');

        elementValue = e.target.closest('.options_item').id;
        console.log('elementValue = ' + elementValue);
        console.log('score = ' + score);

        if (flag == false) {
            if (elementValue == correctAnswer) {
                console.log('URRA')
                audio.WINN.play();
                score += scoreStage;
                scoreWindow.textContent = score;

/*                 if (buttonSelect[elementValue].className == 'item_button incorrect' || buttonSelect[elementValue].className == 'item_button correct') {
                            } else {
                                score += scoreStage;
                            } */
                
                //buttonSelect[elementValue].classList.add('correct');
                nameOfBird.textContent = birdsData[stage][elementValue].name;
                imageOfBird.src = `${birdsData[stage][elementValue].image}`
                flag = true;
                //score = score + scoreStage;
    
            } else {
                audio.TURN.play();
                //buttonSelect[elementValue].classList.add('incorrect');
                //scoreStage--;
    
                 if (buttonSelect[elementValue].className == 'item_button incorrect' || buttonSelect[elementValue].className == 'item_button correct') {
                     scoreStage;
                 } else {
                     scoreStage--;
                 } 
            }
        }





        fillDescription()

    })
    return flag //&& score
}















function getRandomNum(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let correctAnswer = getRandomNum(0, 5)
//console.log('correctAnswer = ' + correctAnswer);
//console.log('score = ' + score);


function setActivePosition(stage) {

    if (stage === 0) {
        activePositon[stage].classList.add('item_active');

    } else {
        activePositon[stage].classList.add('item_active');
        activePositon[stage - 1].classList.remove('item_active');
    }

    /*     if (stage < 6) {
    
        } */


}

setActivePosition(stage);