import Action from './Action';

class ViewStore {
    model: any;

    accept(action: Action) {
        if (action.type === 'LOAD') {
            this.model = action.payload;
        }
    }
}

export default new ViewStore();