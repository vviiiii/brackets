module.exports = function check(str, bracketsConfig) {
    // your solution
    if (str.length % 2 != 0) {
        return false;
    }


    let pairs = {};
    //make open and close pairs(key=open and value=close)
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            if (bracketsConfig[i][j + 1]) {
                pairs[bracketsConfig[i][j]] = bracketsConfig[i][j + 1];
            }

        }
    }

    let arrStack = [];
    //check str on open and close
    //make stack for keys(open)
    for (let i = 0; i < str.length; i++) {
        let elem = str[i];

        if (Object.keys(pairs).includes(elem)) {
            // if  key===value and last elem in stack === elem --> pop last elem, else push elem in stack 
            if (pairs[elem] === elem && elem === arrStack[arrStack.length - 1]) {
                arrStack.pop();
            } else {
                arrStack.push(elem);
            }

        } else { //if elem in values, then compare with last elem in arrstack
            let last = pairs[arrStack.pop()];
            if (last !== elem) {
                return false;
            }
        }
    }

    //if array not empty-> false
    if (arrStack.length) {
        return false;
    } else {
        return true;
    }


}
