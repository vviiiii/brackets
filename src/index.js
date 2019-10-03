module.exports = function check(str, bracketsConfig) {
    // your solution
    if (str.length % 2 != 0) {
        return false;
    }

    let pairs = {};

    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let j = 0; j < bracketsConfig[i].length; j++) {
            // console.log(bracketsConfig[i][j]);
            if (bracketsConfig[i][j + 1]) {
                pairs[bracketsConfig[i][j]] = bracketsConfig[i][j + 1];
            }

        }
    }
    // console.log('pairs', pairs);


    let arrStack = [];

    for (let i = 0; i < str.length; i++) {
        // console.log('Object.keys(pairs).includes(str[i])', Object.keys(pairs).includes(str[i]));
        // console.log('pairs[str[i] != str[i]', pairs[str[i]]);
        if (Object.keys(pairs).includes(str[i])) {
            if (pairs[str[i]] != str[i]) {
                arrStack.push(str[i])
            }

        } else if (Object.values(pairs).includes(str[i])) {
            let last = pairs[arrStack.pop()];
            // console.log('last', last);
            // console.log('str[i]', str[i]);
            if (!(last === str[i])) {
                return false;
            }
        } else {
            return undefined;
        }
    }
    console.log('arrStack', arrStack);

    if (arrStack.length) {
        return false;
    } else {
        return true;
    }


}
