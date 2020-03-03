module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) return false;

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let elem = str[i];
        for (let j = 0; j < bracketsConfig.length; j++) {
            let bracketOpen = bracketsConfig[j][0];
            let bracketClose = bracketsConfig[j][1];

            if ((elem == bracketOpen)) {
                if (bracketOpen != bracketClose) {
                    stack.push(elem);
                    break;
                } else if (stack[stack.length - 1] === elem) {
                    stack.pop();
                    break;
                } else {
                    stack.push(elem);
                    break;
                }

            } else if ((elem == bracketClose) && (stack[stack.length - 1] == bracketOpen)) {
                stack.pop();
                break;
            }
        }

    }

    if (stack.length === 0) return true;
    return false;
}