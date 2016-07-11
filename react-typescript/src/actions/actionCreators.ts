import Dispatcher from '../Dispatcher';
import 'whatwg-fetch';

const url = '/data';

export function load(): Promise<any> {
    return window.fetch(url)
        .then((response: Response) => response.json())
        .then((json: Object) => Dispatcher.dispatch({
            type: 'LOAD',
            payload: json
        }))
        .catch((ex: any) => console.log('parsing failed', ex));

}
