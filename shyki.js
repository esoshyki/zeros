const exp = '11!!*22!!*33!!'

function zeros(expression) {

    const find = (exp) => {
        let num = parseInt(exp);
        let zeroCounter = 0;
        let step = 1;
        while (5 ** step <= num) {
            zeroCounter += Math.floor(num / (5 ** step ));
            step += 1;
       }
       console.log(zeroCounter)
       return zeroCounter
    }

    const findDouble = (exp) => {
        let num = parseInt(exp);
        let zeroCounter = 0;
        let step = 1;
        if (num%2 === 1) { 
            while (5 ** step <= num) {
                for (let i = 5 * step; i<= num; i+= 10 * step) {
                    console.log(`i = ${i}`)
                    zeroCounter += 1
                }
                step += 1;
           }
        }
        else {
            while (10 ** step <= num) {
                zeroCounter += Math.floor(num / (10 ** step ));
                step += 1;
           }
        }
        console.log(zeroCounter)
        return zeroCounter
    }

    const arr = expression.split('*');
    const once = arr.filter(el => el.match(/\d+!{1}$/)).map(el => el.replace('!',''))
    const double = arr.filter(el => el.match(/\d+!{2}$/)).map(el => el.replace('!!',''));
    let answer = 0
    once.forEach(el => answer += find(el));
    double.forEach(el => answer += findDouble(el));
    console.log(answer)
    return answer
}

(zeros(exp))