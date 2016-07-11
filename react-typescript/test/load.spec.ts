import {assert, spyOn} from 'expect';
import 'isomorphic-fetch';

import {load} from '../src/actions/actionCreators';
import store from '../src/stores/dataStore';

function createResponse(jsonResponse: Object, status = 200) {
    const response = new Response(JSON.stringify(jsonResponse), {
        status: status
    });

    return Promise.resolve(response);
}

describe('Load action', () => {

    let fetchSpy: any;
    beforeEach(() => {
        fetchSpy = spyOn(window, 'fetch');
    });

    afterEach(() => {
        fetchSpy.restore();
    });

    it('loads data into store', () => {
        // given
        const model = {
            value: 10
        };
        fetchSpy.andReturn(createResponse(model));

        // when
        const fetchPromise: Promise<any> = load();

        // then
        fetchPromise.then(()=> {
            assert(store.model.value === model.value, 'model should be properly defined after load');
            assert(fetchSpy.calls.length === 1, 'there should be exactly one fetch');
            assert(fetchSpy.calls[0].arguments.length === 1, 'fetch should get url as paramter');
            // assert(fetchSpy.calls[0].arguments[0]).toMatch(/api\/votes$/);
        });

    });

});
