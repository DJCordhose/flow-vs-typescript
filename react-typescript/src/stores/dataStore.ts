import Action from '../actions/Action';
import Dispatcher from '../Dispatcher';

class DataStore {
    private _model: any;
    private _listeners: Array<() => void> = [];

    constructor() {
        Dispatcher.register(this);
    }

    accept(action: Action) {
        if (action.type === 'LOAD') {
            this._model = action.payload;
            this.notify();
        }
    }

    get model() {
        return this._model;
    }

    register(listener: () => void) {
        this._listeners.push(listener);
    }
    
    private notify() {
        this._listeners.forEach(listener => listener());
    }

}

export default new DataStore();