const createTriangle = rows => {
    let triangle = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            triangle += '*';
        }
        triangle += '\n';
    }
    return triangle;
}

const createReverseTriangle = rows => {
    let triangle = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = rows; j >= 1; j--) {
            i >= j ? triangle += '*' : triangle += ' ';
        }
        triangle += '\n';
    }
    return triangle;
}

const createInvertedTriangle = rows => {
    let triangle = '';
    for (let i = rows; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            triangle += '*';
        }
        triangle += '\n';
    }
    return triangle;
}

const createInvertedReverseTriangle = rows => {
    let triangle = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows; j++) {
            j >= i ? triangle += '*' : triangle += ' ';
        }
        triangle += '\n';
    }
    return triangle;
}

console.log(createTriangle(5));
console.log(createReverseTriangle(5));
console.log(createInvertedTriangle(5));
console.log(createInvertedReverseTriangle(5));
