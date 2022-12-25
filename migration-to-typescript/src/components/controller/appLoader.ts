import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi-redirect-production.up.railway.app/', {
            apiKey: '5d05bc4605d4423db036f3196b99b52f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
