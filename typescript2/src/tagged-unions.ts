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
