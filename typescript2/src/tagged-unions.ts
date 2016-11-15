// https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#tagged-union-types

interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

const shapes: Shape[] = [];

shapes.push({
    kind: "square",
    size: 10
});

// no
// shapes.push({
//     kind: "square"
// });

shapes.push({
    kind: "circle",
    radius: 10
});


const shape: Shape = shapes[0];
// no
// shape.size;
if (shape.kind === 'square') {
    // yes
    console.log(shape.size);
}

type formatType = { strikeThrough: true, underline: false } | { strikeThrough: false, underline: true}
                | { strikeThrough: false, underline: false };

function format(text: string, format: {
    strikeThrough: boolean,
    underline: boolean
}) {
    const {strikeThrough, underline} = format;
    if (strikeThrough && underline) {
        throw new Error('Illegal format');
    }
}

format('my text', {strikeThrough: true, underline: true});
