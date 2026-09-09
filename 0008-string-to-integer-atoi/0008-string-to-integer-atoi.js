var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let num = 0;

    
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }


    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i] - '0');

        
        if (sign === 1 && num > 2147483647) {
            return 2147483647;
        }

        if (sign === -1 && num > 2147483648) {
            return -2147483648;
        }

        i++;
    }

    return sign * num;
};