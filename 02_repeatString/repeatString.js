const repeatString = function(string,num) {
    let text = string;
    for (let i = 1; i < num; i++) {
        text += string;
    }

    if(num == 0) {
        text = '';
    } else if (num < 0) {
        text = 'ERROR';
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
