import Page from "../../components/page";
import Garage from "../garage/garage";
import Winners from "../winners/winners";
import Header from "../../components/header/header";

export const enum PageLinks {
    GaragePage = 'garage',
    WinnersPage = 'winners',
}
class App {
    private static container: HTMLElement = document.body;
    private static defaultPageLink: string = 'current-page';
    private initialPage: Garage;
    private header: Header;

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageLink}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;
        if (idPage === PageLinks.GaragePage) {
            page = new Garage(idPage);
        } else if (idPage === PageLinks.WinnersPage) {
            page = new Winners(idPage);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageLink;
            App.container.append(pageHTML);
        }
    }

    private enableRouteChannge() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        })
    }
    constructor() {
        this.initialPage = new Garage('garage')
        this.header = new Header;
    }

    run() {
        App.container.append(this.header.render());
        App.renderNewPage('garage');
        this.enableRouteChannge();
    }
}

export default App;