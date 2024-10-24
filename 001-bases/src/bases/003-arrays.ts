export const numberArrays = [1,2,3,4,5];

numberArrays.push(10);

const numberArrays2:(number|string)[] = [...numberArrays];
numberArrays2.push('hola');


console.log({numberArrays, numberArrays2});