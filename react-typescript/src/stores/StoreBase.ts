import {List} from 'immutable';

import Action from '../actions/Action';
import Dispatcher from '../Dispatcher';

type Callback = () => void;

abstract class StoreBase {
    private _listeners: List<Callback> = List<Callback>();

    constructor() {
        Dispatcher.register(this);
    }

    abstract accept(action: Action): void;

    register(listener: () => void) {
        this._listeners = this._listeners.push(listener);
    }

    protected notify() {
        this._listeners.forEach(listener => listener());
    }

}

export default StoreBase;