import Action from './actions/Action';

interface Store {
    accept(action: Action): void;
}

export default Store;