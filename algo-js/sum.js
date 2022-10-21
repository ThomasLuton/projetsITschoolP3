const string = process.argv[2];
// string to array
const stringArray = [];
let tmp = "";

for(let i = 0; i < string.length; i++){
    const candidate = string[i];
    if(candidate != ','){
        tmp += candidate;
        
    }else{
        stringArray.push(tmp);
        tmp ='';
    }
}
stringArray.push(tmp);
// array of string to array of numbers
const numbers = [];
for(let i = 0; i < stringArray.length; i++){
    const number = parseInt(stringArray[i], 10);
    numbers.push(number);
}

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log("Sum is equal to " + sum);