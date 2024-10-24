const greetPerson = (name: string) =>`Hola, ${name}`;

console.log(greetPerson("Jorge"));

const getUser = (id:string) =>
  ({
        id: id,
        name: "Jorge",
        username: "jtrocelj",
        password: '12345'
    })

console.log(getUser('1a'));


const cars = [
    {
        id: 1,
        brand: "Toyota",
        model: "Camry",
        year: 2020
    },
    {
        id: 2,
        brand: "Ford",
        model: "Mustang",
        year: 2018
    }
]


const car = cars.find((c) => c.id === 1);
console.log(car?.brand);