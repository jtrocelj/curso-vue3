import type {Hero} from '../data/heroes';
import { getHeroById } from "./007-imp-exp";

// console.log("Inicio");
// new Promise((resolve, reject) => {

// //resolve('el procedimiento se cumplió');
// reject('el procedimiento no se cumplió');

// }).then((message) => console.log(message))
// .catch((error) => console.log(error)); 

// console.log("Fin");

const getHeroByIdAsync = (id: number):Promise<Hero> => {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
           const hero = getHeroById( id );

           hero ? resolve(hero) : reject(`Heroe no encontrado #${ id }`);       


        }, 1000);

    });
}


getHeroByIdAsync(1)
.then(hero => console.log(`El heroe es :${hero.name}`));