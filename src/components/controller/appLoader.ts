import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '4e2741ce7c7b4a72be59135c355f6489', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
