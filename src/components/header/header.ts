import { PageLinks } from "../../pages/app/app"; 
import './header.css'
const Buttons = [
    {
        id: PageLinks.GaragePage,
        text: 'Garage',
    },
    {
        id: PageLinks.WinnersPage,
        text: 'Winners',
    }
]

class Header {
    private container: HTMLElement;

    constructor() {
        this.container = document.createElement('header');
        this.container.className = 'header';
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        pageButtons.className = 'buttons-container'
        Buttons.forEach((button) => {
            const formButton = document.createElement('form');
            formButton.action = `#${button.id}`;
            const buttonHTML = document.createElement('button');
            buttonHTML.className = 'navigation-button'
            buttonHTML.innerText = button.text;
            formButton.append(buttonHTML);
            pageButtons.append(formButton);
           // buttonHTML.href = `#${button.id}`;
            //pageButtons.append(buttonHTML);
        });
        this.container.append(pageButtons);
    }


    render() {
        this.renderPageButtons();
        return this.container
    }
}

export default Header;