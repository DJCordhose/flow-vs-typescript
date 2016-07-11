import viewStore from '../src/stores/ViewStore';
import {assert} from 'expect';

describe('ViewStore', () => {
    it('can load', () => {
        const model = 'model';
        viewStore.accept({
            type: 'LOAD',
            payload: model
        });
        assert(viewStore.model === model, 'model should be properly defined after load');
    });

});
