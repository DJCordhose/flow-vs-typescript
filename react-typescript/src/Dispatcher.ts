import {List} from 'immutable';

import Store from './Store';
import Action from './actions/Action'

class Dispatcher {
    private _stores: List<Store> = List<Store>();

    dispatch(action: Action) {
        this._stores.forEach(store => store.accept(action));
    }

    register(store: Store) {
        this._stores = this._stores.push(store);
    }

}

export default new Dispatcher();