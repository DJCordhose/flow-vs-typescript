// https://flowtype.org/docs/disjoint-unions.html

/* @flow */

type Resp = Res | Err; // a disjoint union type with two cases
type Res = { status: 'done', payload: Object };
type Err = { status: 'error', message: string };

function callback(response: Resp) {
    // given by code compeletion
    switch (response.status) {
        case 'done':
            // this is the special thing: we now know, this is a Response
            const result: Res = response;
            console.log(result.payload);
            break;
        case 'error':
            const error: Err = response;
            console.log(error.message);
            break;
    }
}

// let aha: Resp;
// if (aha.status === 'done') {
//     const oho: Res = Resp;
// }

