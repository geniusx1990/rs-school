const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.navigation');
const menuCloseItem = document.querySelector('.header_nav-close')
const grayArea = document.querySelector('.gray_wrapper');

burgerItem.addEventListener('click', () => {
    menu.classList.add('navigation_active');
    grayArea.classList.add('gray_wrapper_active');

})

menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('navigation_active');
    grayArea.classList.remove('gray_wrapper_active');
})

grayArea.addEventListener('click', () => {
    menu.classList.remove('navigation_active');
    grayArea.classList.remove('gray_wrapper_active');
})



const width = document.body.clientWidth;
const roller = document.querySelector('.boxes_wrapper');
var elem = document.querySelector('.scrollbar_input[type="range"]');
var rangeValue = function () {
    let arr;
    if (width < 1550) {
        arr = [36.35, 27.3, 18.25, 9.2, 0, -9.5, -18.25, -27.3]
    } else {
        arr = [31.8, 22.7, 13.6, 4.5, -4.6, -13.6, -22.7, -31.8];
    }
    roller.style.transform = `translateX(${arr[elem.value]}%)`;
}

elem.addEventListener("input", rangeValue);


const popClose = document.querySelector('.pop-close');
const review1 = document.querySelector('.review_1');
const reviews = document.querySelectorAll('.box');
const popArooundArea = document.querySelector('.gray_wrapper_pop-up');
const popup = document.querySelector('.pop-up_wrapper');


const test = document.querySelector('.pop-up_wrapper')




const user_name = document.querySelector('.user_name_pop-up');
const user_story = document.querySelector('.user_story-pop');
let user_icon = document.querySelector('.testimonials_content_header_pop-up');
if (width < 1000)
    for (const review of reviews) {
        review.addEventListener('click', () => {
            popArooundArea.classList.add('pop-up_active')
            popup.classList.remove('hidden');
            user_name.innerHTML = review.lastElementChild.firstElementChild.lastElementChild.firstElementChild.textContent;
            let img = document.createElement('img');
            img.setAttribute('class', 'temporary_image');
            img.src = review.lastElementChild.firstElementChild.firstChild.src;
            user_icon.prepend(img);
            user_story.innerHTML = review.querySelector('.user_story').textContent;
        })
    }


popArooundArea.addEventListener('click', () => {
    popArooundArea.classList.remove('pop-up_active')
    popup.classList.add('hidden');
    document.querySelector('.temporary_image').src = '';

})

popClose.addEventListener('click', () => {
    popArooundArea.classList.remove('pop-up_active')
    popup.classList.add('hidden');
    document.querySelector('.temporary_image').src = '';

})


const alnimals_cards = [
    {
        url: "../../assets/images/card_1.jpg",
        header: 'Giant Pandas',
        description: 'Native to Southwest China',
        alt: 'card_1',
        icon: 0
    },
    {
        url: "../../assets/images/card_2.jpg",
        alt: 'eagles',
        header: 'Eagles',
        description: 'Native to South America',
        alt: 'card_2',
        icon: 1
    },
    {
        url: "../../assets/images/card_3.jpg",
        header: 'Gorillas',
        description: 'Native to Congo',
        alt: 'card_3',
        icon: 0
    },
    {
        url: "../../assets/images/card_4.jpg",
        header: 'Two-toed sloth',
        description: 'Mesoamerica, South America',
        alt: 'card_4',
        icon: 0
    },
    {
        url: "../../assets/images/card_5.jpg",
        header: 'Cheetahs',
        description: 'Native to Africa',
        alt: 'card_5',
        icon: 1

    },
    {
        url: "../../assets/images/card_6.jpg",
        header: 'Penguins',
        description: 'Native to Antarctica',
        alt: 'card_6',
        icon: 1

    },
    {
        url: "../../assets/images/card_7.jpg",
        header: 'Alligators',
        description: 'Native to Southeastern U. S.',
        alt: 'card_7',
        icon: 1
    }
]

const icons = [
    {
        class_1: 'banana',
        url_1: "../../assets/icons/banana.svg",
        alt_1: 'banana',
        class_2: 'bamboo-color',
        url_2: "../../assets/icons/bamboo.svg",
        alt_2: 'bamboo_color'
    },
    {
        class_1: 'steak',
        url_1: "../../assets/icons/steak_icon.svg",
        alt_1: 'steak_icon',
        class_2: 'fish',
        url_2: "../../assets/icons/fish_icon.svg",
        alt_2: 'fish_icon'
    }
]


const petsContainer = document.querySelector('.pets-conainer');
const left = document.querySelector('.left');
const right = document.querySelector('.right');



function createCards() {
    for (var a = [], i = 0; i < 7; ++i) a[i] = i;

    function shuffle(array) {
        var tmp, current, top = array.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }
    if (width >= 1000) {
        a = shuffle(a).slice(1);

    }
    if (width < 1000) {
        a = shuffle(a).slice(3);

    }


    console.log(a);

    let cards = '';

    for (let i = 0; i < a.length; i++) {
        cards +=
            `<div class="alnimals_card"><img class="card_img" src=${alnimals_cards[a[i]].url} alt=${alnimals_cards[a[i]].alt}>
                <div class="alnimals_card-content">
                    <div class="text-description">
                        <p class="alnimals_card_header">${alnimals_cards[a[i]].header}</p>
                        <p class="alnimals_card_description">${alnimals_cards[a[i]].description}</p>
                    </div>
                    <img class=${icons[alnimals_cards[a[i]].icon].class_1} src=${icons[alnimals_cards[a[i]].icon].url_1} alt=${icons[alnimals_cards[a[i]].icon].alt_1}>
                    <img class=${icons[alnimals_cards[a[i]].icon].class_2} src=${icons[alnimals_cards[a[i]].icon].url_2} alt=${icons[alnimals_cards[a[i]].icon].alt_2}>
                </div>
            </div>`
    }

    return cards
}

function insertCards() {
    let test = document.createElement('div');
    test.setAttribute('class', 'cards');
/*     test.classList.add('new');
 */    test.innerHTML = createCards();


    let test2 = document.querySelector('.cards');
    test2.after(test);

    if (width > 1556) {

        petsContainer.classList.add('working');
        petsContainer.style.transform = `translateX(-1179px)`;
        setTimeout(() => {
            document.querySelector('.cards').remove();
            petsContainer.classList.remove('working');
            petsContainer.style.transform = `translateX(0)`;
        }, "500")
    }

    if (width < 1556 && width > 1000) {

        petsContainer.classList.add('working');
        petsContainer.style.transform = `translateX(-1000px)`;
        setTimeout(() => {
            document.querySelector('.cards').remove();
            petsContainer.classList.remove('working');
            petsContainer.style.transform = `translateX(0)`;
        }, "500")
    }


    if (width < 1000 && width > 640) {

        petsContainer.classList.add('working');
        petsContainer.style.transform = `translateX(-650px)`;
        setTimeout(() => {
            document.querySelector('.cards').remove();
            petsContainer.classList.remove('working');
            petsContainer.style.transform = `translateX(0)`;
        }, "500")
    }


}

/* 
function insertCards2() {
    let test = document.createElement('div');
    test.setAttribute('class', 'cards');
    test.innerHTML = createCards();

    petsContainer.prepend(test)

    petsContainer.classList.add('working_left');




} */

function insertCards2() {
    let test = document.createElement('div');
    test.setAttribute('class', 'cards');
    test.innerHTML = createCards();
    let test2 = document.querySelector('.cards');
    test2.before(test);
    petsContainer.classList.add('working');






        petsContainer.style.transform = `translateX(0px)`;

        setTimeout(() => {
            test2.remove();
            petsContainer.classList.remove('working');
        }, "500")






}











function next() {
    insertCards()
    right.removeEventListener('click', next)
    setTimeout(() => {
        right.addEventListener('click', next)
    }, "500")
}

function prev() {
    insertCards2()
    left.removeEventListener('click', prev)
    setTimeout(() => {
        left.addEventListener('click', prev)
    }, "500")
}


right.addEventListener('click', next);
left.addEventListener('click', prev);

