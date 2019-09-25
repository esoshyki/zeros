const exp = '11!!*22!!*33!!'

function zeros(expression) {

    let two_count = 0; let five_count = 0;

    const find = (num, method) => {
        const two_find = () => {
            let step = 1;
            while (2 ** step <= num) {
                two_count += Math.floor( num / 2 ** step);
                step ++
            }
        }
        console.log(typeof num)
        const five_find = () => {
            let step = 1;
            while (5 ** step <= num) {
                five_count += Math.floor( num / 5 ** step)
                step ++
            }
        }

        const find_half = () => {
            let step = 1; 
            console.log(`num = ${num}`)
            while (5 ** step <= num) {
                let num_here = num;
                console.log(num)
                while (num_here > 0) {
                    if (num_here % (5 ** step) === 0) {
                        five_count += 1;
                    }
                    num_here -= 2;
                    console.log(num)
                }
                step += 1
            }

            step = 1;
            while (2 ** step < num) {
                let num_here = num;
                while (num_here > 0) {
                    if (num_here % (2 ** step) === 0) {
                        two_count += 1;
                    }
                    num_here -= 2;
                }
                step += 1
            }
        }

        if (method === 1) {
            two_find()
            five_find()
        }

        if (method === 2) {
            find_half()
        }
        console.log(`five_count = ${five_count} two_count = ${two_count}`)
    }

    const arr = expression.split('*');

    const once = arr.filter(el => el.match(/\d+!{1}$/)).map(el => el.replace('!',''))
    const double = arr.filter(el => el.match(/\d+!{2}$/)).map(el => el.replace('!!',''));

    once.forEach(el => find(parseInt(el), 1));
    double.forEach(el => find(parseInt(el), 2));
    console.log(`two_count = ${two_count} five_count = ${five_count}`)
    return Math.min(two_count, five_count)
}

console.log(zeros(exp))