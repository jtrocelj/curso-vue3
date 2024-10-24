export const person = {
    lastName : 'Trocel',
    age: 22,
    address: {
        city: 'La Paz',
        cellphone: 73053480
    }
}

const person2 = structuredClone(person);

person2.lastName = 'Justiniano';
person2.address.cellphone = 1231;
console.log({person});
console.log({person2});