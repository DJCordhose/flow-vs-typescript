import Action from '../actions/Action';
import StoreBase from './StoreBase';

class DataStore extends StoreBase {
    private _model: any;

    accept(action: Action) {
        if (action.type === 'LOAD') {
            this._model = action.payload;
            this.notify();
        }
    }

    get model() {
        return this._model;
    }
}

export default new DataStore();