import store from '../src/stores/store';
import {assert} from 'expect';

describe('store', () => {
    it('can load', () => {
        const model = 'model';
        store.accept({
            type: 'LOAD',
            payload: model
        });
        assert(store.model === model, 'model should be properly defined after load');
    });

});
