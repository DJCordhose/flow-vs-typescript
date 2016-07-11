import Action from '../actions/Action';
import Dispatcher from '../Dispatcher';

class Store {
    model: any;

    constructor() {
        Dispatcher.register(this);
    }

    accept(action: Action) {
        if (action.type === 'LOAD') {
            this.model = action.payload;
        }
    }
}

export default new Store();