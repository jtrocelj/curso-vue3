import heroes,{ Owner } from "../data/heroes";

//console.log( heroes,owners );

export const getHeroById = (id: number) => {
    const hero = heroes.find(hero => hero.id === id) ?? {};
    return hero;
}

//console.log( getHeroById(2));

export const getHeroByOwner = (owner: Owner) => {
    const hero = heroes.filter(hero => hero.owner === owner) ?? {};
    return hero;
}

console.log( getHeroByOwner('Marvel'));