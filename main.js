

function Boo() {
    let i = 0;
    return {
        next: function () {
            i++;
            if (i == 1) {
                console.log('start')
                return { value: i, done: false }
            }
            if (i == 2) {
                return { value: i, done: false }
            }
            if (i == 3) {

                return { value: i, done: false }
            }
            if (i == 4) {
                console.log('finish')
                return { value: i, done: true }
            }

        }
    }

}

const iterator = Boo();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
