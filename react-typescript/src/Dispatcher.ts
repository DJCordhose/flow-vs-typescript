import Store from './Store';
import Action from './actions/Action'

class Dispatcher {
    // todo: make that immutable
    private stores: Array<Store> = [];

    dispatch(action: Action) {
        for (const store of this.stores) {
            store.accept(action);
        }
    }

    register(store: Store) {
        this.stores.push(store);
    }

}

export default new Dispatcher();