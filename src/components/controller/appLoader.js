import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd433e14323954f33beb3535eb246919e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
