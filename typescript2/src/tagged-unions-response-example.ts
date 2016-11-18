// https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#tagged-union-types
// https://flowtype.org/docs/disjoint-unions.html
// https://guide.elm-lang.org/types/union_types.html

type Resp = Res | Err; // a disjoint union type with two cases
type Res = { status: 'done', payload: Object };
type Err = { status: 'error', message: string };

function callback(response: Resp) {
    // given by code compeletion
    switch (response.status) {
        case 'done':
            const result: Res = response;
            console.log(result.payload);
            break;
        case 'error':
            const error: Err = response;
            console.log(error.message);
            break;
    }
}