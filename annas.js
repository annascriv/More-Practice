

function addEmUp(num1,num2) {
    return num1+num2
}

function printAlphabet(str) {
    str=str.split('');
    let alphabet='abcdefghijklmnopqrstuvwxyz'
    let newStr='';

    for (let i=0;i<str.length;i++) {
        if (alphabet.includes(str[i])) {
            newStr+=str[i]
        } return newStr
    }
}