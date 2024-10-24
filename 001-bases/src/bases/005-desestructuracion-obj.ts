interface Hero {
    name : string;
    age : number;
    city : string;
    power?:string; // optional
}

export const person:Hero = {
    name: 'John',
    age: 30,
    city: 'New York',
}

// desestructuracion del objeto person
const {name, city, power='no tiene poder'} = person;
console.log(name,city, power);

