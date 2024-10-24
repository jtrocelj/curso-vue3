const sayayins = ['goku', 'vegeta', 'goten'];
const [g,v] = sayayins;
console.log(g+" , "+v);

const returnArray = () => {
    return[234,'ABC'] as const;
};
const [n,s] = returnArray();
console.log(n,s);

