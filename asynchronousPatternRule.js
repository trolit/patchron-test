async function test1() {
    try {
        const rules = await this.helpers.doSomething();

        if (rules) {
            console.log('1');
        }
    } catch (error) {
        console.error(error);
    }
}

function test2() {
    this.helpers.doSomething().then((rules) => {
        if (rules) {
            console.log('1');
        }
    });
}
