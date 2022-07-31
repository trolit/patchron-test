const test = false;

if (test === true) {
    console.log('1');
}

if (test) {
    console.log('1');
}

const test2 = null;

if (test2 === null) {
    console.log('2');
}

if (!test2) {
    console.log('2');
}

const result = -1;

if (result !== -1) {
    console.log('3');
}

if (~result) {
    console.log('3');
}
