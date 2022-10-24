let wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');
document.body.append(wrapper)
let container = document.createElement('div');
container.setAttribute('class', 'container');
wrapper.append(container);
let buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons_wrapper');
container.append(buttons);
let text = document.createElement('div');
text.setAttribute('class', 'text_wrapper');
container.append(text)
let gameField = document.createElement('div');
gameField.setAttribute('class', 'game_field')
container.append(gameField)
let footer = document.createElement('div')
footer.setAttribute('class', 'footer');
container.append(footer);





let results = []; //JSON.parse(localStorage.getItem('result'));


let namesOfButtons = ['Shuffle and start', 'Stop', 'Save', 'Results'];
for (let i = 0; i < 4; i++) {
    let shuffleButton = document.createElement('button');
    shuffleButton.setAttribute('class', 'button' + ` button${[i]}`);
    buttons.append(shuffleButton);
    shuffleButton.innerHTML = `${namesOfButtons[i]}`;
}

let count = 0;
let sec = 0;
let interval;


const div9 = document.createElement('div');
div9.setAttribute('class', 'volume-button');
text.append(div9);
const volumeButton = document.querySelector('.volume-button');



let namesOfLabels = ['Moves: ', `${count}`, 'Time: ', '00:00'];
for (let j = 0; j < 4; j++) {
    let labelsTop = document.createElement('p');
    labelsTop.setAttribute('class', 'labelsTop');
    text.append(labelsTop);
    labelsTop.innerHTML = `${namesOfLabels[j]}`;
}





let footer_part_1 = document.createElement('div');
footer_part_1.setAttribute('class', 'footer_part_1');
footer.append(footer_part_1);
let footerTitles = ['Frame size: ', '4 x 4'];
for (let i = 0; i < 2; i++) {
    let footerContent = document.createElement('p');
    footerContent.setAttribute('class', 'footer_content');
    footer_part_1.append(footerContent);
    footerContent.innerHTML = `${footerTitles[i]}`;

}



let footer_part_2 = document.createElement('div');
footer_part_2.setAttribute('class', 'footer_part_2');
footer.append(footer_part_2);

let sizeTitle = document.createElement('p');
sizeTitle.setAttribute('class', 'sizeTitle');
footer_part_2.append(sizeTitle);
sizeTitle.innerHTML = 'Other sizes:'


let levelOfDifficultesArray = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];
for (let i = 0; i < 6; i++) {
    let levelOfDifficultes = document.createElement('a');
    levelOfDifficultes.setAttribute('class', 'difficulties');
    footer_part_2.append(levelOfDifficultes);
    levelOfDifficultes.innerHTML = `${levelOfDifficultesArray[i]}`;


}

let widthOfScreen = document.documentElement.clientWidth;



let n = window.addEventListener("resize", function () {
    let widthOfScreen = document.documentElement.clientWidth;

    //console.log(window.innerWidth);
    console.log(widthOfScreen);
    /*  if (widthOfScreen < 500) {
         n = 200
     } else {
         n = 50;
     } */

});




let lefelOfDifficulty = document.querySelectorAll('.difficulties');
lefelOfDifficulty[0].addEventListener('click', () => {
    window.localStorage.removeItem('size');
    window.localStorage.removeItem('arrayofdata');
    window.localStorage.removeItem('n');
    size = 3;

    let widthOfScreen = document.documentElement.clientWidth;
    console.log(widthOfScreen);
    if (widthOfScreen < 500) {
        n = 100;
    } else {
        n = 132;
    }

    deleteDataFromArray()
    //app(3, 132);
    app(size, n);
    console.log(size)
    document.querySelectorAll('.footer_content')[1].innerHTML = (`${size}x${size}`)

});

lefelOfDifficulty[1].addEventListener('click', () => {
    window.localStorage.removeItem('size');
    window.localStorage.removeItem('arrayofdata');
    window.localStorage.removeItem('n');
    size = 4;
    let widthOfScreen = document.documentElement.clientWidth;

    if (widthOfScreen < 500) {
        n = 75;
    } else {
        n = 100;
    }
    deleteDataFromArray()
    app(size, n)
    //app(4, 100);
    console.log(size)
    document.querySelectorAll('.footer_content')[1].innerHTML = (`${size}x${size}`)

});

lefelOfDifficulty[2].addEventListener('click', () => {
    window.localStorage.removeItem('size');
    window.localStorage.removeItem('arrayofdata');
    window.localStorage.removeItem('n');
    size = 5;

    if (widthOfScreen < 500) {
        n = 60;
    } else {
        n = 80;
    }
    deleteDataFromArray()
    app(size, n)

    //app(5, 80);
    console.log(size)
    document.querySelectorAll('.footer_content')[1].innerHTML = (`${size}x${size}`)

});

lefelOfDifficulty[3].addEventListener('click', () => {
    window.localStorage.removeItem('size');
    window.localStorage.removeItem('arrayofdata');
    window.localStorage.removeItem('n');
    size = 6;
    if (widthOfScreen < 500) {
        n = 50;
    } else {
        n = 66.6;
    }
    deleteDataFromArray()
    app(size, n);
    //app(6, 66.6);
    console.log(size)
    document.querySelectorAll('.footer_content')[1].innerHTML = (`${size}x${size}`)

});

lefelOfDifficulty[4].addEventListener('click', () => {
    window.localStorage.removeItem('size');
    window.localStorage.removeItem('arrayofdata');
    window.localStorage.removeItem('n');

    size = 7;
    if (widthOfScreen < 500) {
        n = 42.85;
    } else {
        n = 57.14;
    }
    deleteDataFromArray()
    app(size, n);
    //app(7, 57.14);
    console.log(size)
    document.querySelectorAll('.footer_content')[1].innerHTML = (`${size}x${size}`)

});

lefelOfDifficulty[5].addEventListener('click', () => {
    window.localStorage.removeItem('size');
    window.localStorage.removeItem('arrayofdata');
    window.localStorage.removeItem('n');
    size = 8;
    if (widthOfScreen < 500) {
        n = 37.5;
    } else {
        n = 50;
    }
    deleteDataFromArray()
    app(size, n);
    //app(8, 50);
    console.log(size)
    document.querySelectorAll('.footer_content')[1].innerHTML = (`${size}x${size}`)

});











if (widthOfScreen < 500) {
    n = 75;
} else {
    n = 100;
}

app(4, n);
let arrayOfCards = [];




function app(size, n) {
    let arrayOfCards = [];

    function getRow(pos) {
        return Math.ceil(pos / size)
    }

    function getCol(pos) {
        const col = pos % size;
        if (col === 0) {
            return size
        }
        return col
    }


    function generateArray() {
        for (let i = 1; i <= size * size; i++) {
            arrayOfCards.push({
                value: i,
                position: i,

                x: (getCol(i) - 1) * n,
                y: (getRow(i) - 1) * n,
                disabled: false,
            })
        }


        console.log(arrayOfCards)
    }












    function deleteDataFromArray() {
        const deleteElements = document.querySelectorAll('.square');
        deleteElements.forEach(element => {
            element.remove()
        });

        for (let i = 1; i <= size * size; i++) {
            arrayOfCards.pop();
        }
    }



    function generateGame() {
        let count = 0;

        const saveButton = document.querySelector('.button2');



        for (let card of arrayOfCards) {
            if (card.disabled) continue
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.width = `${n}px`;
            square.style.height = `${n}px`;

            gameField.append(square);
            square.style.left = `${card.x}px`;
            square.style.top = `${card.y}px`;
            square.innerHTML = `${card.value}`


            const cardDisabled = arrayOfCards.find(item => item.value === size * size);
            //saveData();

            const labelsTop = document.querySelectorAll('.labelsTop');


            square.addEventListener('click', () => {
                const positionX = Math.abs(cardDisabled.x - card.x);
                const positionY = Math.abs(cardDisabled.y - card.y);

/*                 if (positionX + positionY > n) {
                    return
                }
 */
                square.style.left = `${cardDisabled.x}px`;
                square.style.top = `${cardDisabled.y}px`;

                const cardEmptyX = cardDisabled.x;
                const cardEmptyY = cardDisabled.y;
                cardDisabled.x = card.x;
                cardDisabled.y = card.y;
                card.x = cardEmptyX;
                card.y = cardEmptyY;

                count = count + 1;
                labelsTop[1].innerHTML = `${count}`
                audio.TURN.play();


                saveButton.addEventListener('click', () => {
                    saveData();

                })

                const gameWin = arrayOfCards.every(card => {
                    return card.value === card.y / n * size + card.x / n + 1;
                })

                if (gameWin) {

                    audio.WINN.play();

                    results.push({
                        user: results.length,
                        time: `${min}:${sec}`,
                        turns: count,
                    })
                    window.localStorage.setItem('result', JSON.stringify(results));

                    setTimeout(() => {

                        alert(`Hooray! You solved the puzzle in ${min}:${sec} and ${count} moves!`)

                    }, "800")

                }


            })
        }



    }


    if (localStorage.getItem('arrayofdata') != undefined) {
        size = localStorage.getItem('size');
        n = localStorage.getItem('n')
        arrayOfCards = JSON.parse(localStorage.getItem('arrayofdata'))
        console.log(arrayOfCards)
        generateGame();

    } else {
        generateArray();
        randomizeArrayOfValues()
        generateGame();
    }








    function randomizeArrayOfValues() {
        const randomValues = getRandomValues();
        console.log(randomValues)
        let i = 0;
        for (let card of arrayOfCards) {
            card.value = randomValues[i];
            i++;
        }
        const cardDisabled = arrayOfCards.find(item => item.value === size * size);
        cardDisabled.disabled = true;
        // console.log(cardDisabled);
    }

    function getRandomValues() {
        const values = [];
        for (let i = 1; i <= size * size; i++) {
            values.push(i);
        }
        const randomValues = values.sort(() => Math.random() - 0.5);
        return randomValues;
    }


    function saveData() {
        localStorage.setItem('arrayofdata', JSON.stringify(arrayOfCards));
        localStorage.setItem('size', size);
        localStorage.setItem('n', n);
    }










    const startButton = document.querySelector('.button0');

    startButton.addEventListener('click', () => {
        deleteDataFromArray();

        const count = 0;
        const labelsTop = document.querySelectorAll('.labelsTop');
        labelsTop[1].innerHTML = count


        generateArray();

        randomizeArrayOfValues()
        generateGame();
        console.log(arrayOfCards)


        clearInterval(interval);
        sec = 0;
        min = 0;
        labelsTop[3].innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
        interval = setInterval(timer, 1000);

    })


    const labelsTop = document.querySelectorAll('.labelsTop');

    let min = 0;
    const timer = function () {
        sec = sec + 1;
        if (sec % 60 === 0) {
            min = min + 1;
            sec = 0;
        }
        labelsTop[3].innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);

    };



    clearInterval(interval);
    interval = setInterval(timer, 1000);





}






















const audio = {
    TURN: new Audio('./turn.mp3'),
    WINN: new Audio('./game-win.mp3'),
};




volumeButton.innerHTML = 'Mute'
volumeButton.addEventListener("click", () => {
    audio.muted = !audio.muted;
    if (audio.muted) {
        volumeButton.innerHTML = 'Unmute';
        toggleMute()
    } else {
        volumeButton.innerHTML = 'Mute'
        toggleMute()
    }

});

function toggleMute() {
    for (var i in audio) {
        audio[i].muted = !audio[i].muted;
    }
}




function deleteDataFromArray() {
    const deleteElements = document.querySelectorAll('.square');
    deleteElements.forEach(element => {
        element.remove()
    });

    for (let i = 1; i <= size * size; i++) {
        arrayOfCards.pop();
    }
}


const grayArea = document.createElement('div');
grayArea.setAttribute('class', 'gray_wrapper');
wrapper.prepend(grayArea)


const resultsButton = document.querySelector('.button3');

resultsButton.addEventListener('click', () => {

    let results = JSON.parse(localStorage.getItem('result'));
    grayArea.innerHTML =
        `<div class="pop-up">
                <div class="pop-up-content">
                        <div class="user">User #</div>
                        <div class="time">Time mm:ss</div>
                        <div class="turns">Turns #</div>
                </div>
            </div>`


    let userLabels = document.querySelector('.user');
    let timeLabels = document.querySelector('.time');
    let turnsLabels = document.querySelector('.turns');

    for (let i = 0; i < results.length; i++) {
        const userLabel = document.createElement('p');
        userLabel.setAttribute('class', 'user');
        userLabels.append(userLabel);
        userLabel.textContent = results[i].user;
        const timeLabel = document.createElement('p');
        timeLabel.setAttribute('class', 'time');
        timeLabels.append(timeLabel)
        timeLabel.textContent = results[i].time;
        const turnsLabel = document.createElement('p');
        turnsLabel.setAttribute('class', 'turn');
        turnsLabels.append(turnsLabel);
        turnsLabel.textContent = results[i].turns;
    }


    grayArea.classList.add('pop-up_active');
})

grayArea.addEventListener('click', () => {
    grayArea.classList.remove('pop-up_active')
})