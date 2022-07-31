const a = 3;

if (a == 2) {
    console.log('1');
}

if (Object.is(a, 2)) {
    console.log('2');
}

if (a === 3) {
    console.log('3');
}

const b = a == 2 ? 1 : 0;
const c = a === 2 ? 1 : 0;
const d = Object.is(a, 2) ? 1 : 0;
