import Page from "../../components/page";

class Winners extends Page {

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle('Winners Page')
        this.container.append(title);
        return this.container
    }
 }

 export default Winners;