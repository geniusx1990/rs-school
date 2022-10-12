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



const output_window = document.querySelector('.input_amount');
const radioButtons = document.querySelectorAll('input[name="radio_dot"]');
radioButtons[5].checked = true;
output_window.value = radioButtons[5].value;
for (const radioButton of radioButtons) {

    radioButton.addEventListener('click', () => {
        output_window.value = radioButton.value;
    });

    output_window.addEventListener('change', () => {
        if (output_window.value === radioButton.value) {
            radioButton.checked = true;
        }
        else {
            radioButton.checked = false;
        }
    })

    


}


