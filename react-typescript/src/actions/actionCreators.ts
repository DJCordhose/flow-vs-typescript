import Dispatcher from '../Dispatcher';
import 'whatwg-fetch';

const url = 'http://localhost:3000/data';

export function load(): Promise<any> {
    return window.fetch(url)
        .then((response: Response) => response.json())
        .then((json: Object) => Dispatcher.dispatch({
            type: 'LOAD',
            payload: json
        }))
        .catch((ex: any) => console.log('parsing failed', ex));

}
