const superheroes = [
{
"name": "Batman",
"publisher": "DC Comics",
"alter_ego": "Bruce Wayne",
"first_appearance": "Detective Comics #27",
"weight": "210"
},
{
"name": "Superman",
"publisher": "DC Comics",
"alter_ego": "Kal-El",
"first_appearance": "Action Comics #1",
"weight": "220"
},
{
"name": "Flash",
"publisher": "DC Comics",
"alter_ego": "Jay Garrick",
"first_appearance": "Flash Comics #1",
"weight": "195"
},
{
"name": "Green Lantern",
"publisher": "DC Comics",
"alter_ego": "Alan Scott",
"first_appearance": "All-American Comics #16",
"weight": "186"
},
{
"name": "Green Arrow",
"publisher": "DC Comics",
"alter_ego": "Oliver Queen",
"first_appearance": "All-American Comics #16",
"weight": "195"
},
{
"name": "Wonder Woman",
"publisher": "DC Comics",
"alter_ego": "Princess Diana",
"first_appearance": "The Incredible Hulk #180",
"weight": "165"
},
{
"name": "Blue Beetle",
"publisher": "DC Comics",
"alter_ego": "Dan Garret",
"first_appearance": "Mystery Men Comics #1",
"weight": "145"
},
{
"name": "Spider Man",
"publisher": "Marvel Comics",
"alter_ego": "Peter Parker",
"first_appearance": "Amazing Fantasy #15",
"weight": "167"
},
{
"name": "Captain America",
"publisher": "Marvel Comics",
"alter_ego": "Steve Rogers",
"first_appearance": "Captain America Comics #1",
"weight": "220"
},
{
"name": "Iron Man",
"publisher": "Marvel Comics",
"alter_ego": "Tony Stark",
"first_appearance": "Tales of Suspense #39",
"weight": "250"
},
{
"name": "Thor",
"publisher": "Marvel Comics",
"alter_ego": "Thor Odinson",
"first_appearance": "Journey into Myster #83",
"weight": "200"
},
{
"name": "Hulk",
"publisher": "Marvel Comics",
"alter_ego": "Bruce Banner",
"first_appearance": "The Incredible Hulk #1",
"weight": "1400"
},
{
"name": "Wolverine",
"publisher": "Marvel Comics",
"alter_ego": "James Howlett",
"first_appearance": "The Incredible Hulk #180",
"weight": "200"
},
{
"name": "Daredevil",
"publisher": "Marvel Comics",
"alter_ego": "Matthew Michael Murdock",
"first_appearance": "Daredevil #1",
"weight": "200"
},
{
"name": "Silver Surfer",
"publisher": "Marvel Comics",
"alter_ego": "Norrin Radd",
"first_appearance": "The Fantastic Four #48",
"weight": "unknown"
}
]

// Alleen .map / .filter / .reduce gebruiken!!
// const = superheroes


// 1. Maak een array van alle superhelden namen:

const getHeroNames = function(){
    return superheroes.map(function(superhero){
        return superhero.name})
}

console.log(getHeroNames());

// 2. Maak een array van alle "lichte" superhelden (< 190 pounds):

const getHeroLightWeights = function(){
    return superheroes.filter(function (lightWeight){
        return lightWeight.weight<190;
    })
}
console.log(getHeroLightWeights());

// 3. Maak een array met de namen van de superhelden die 200 pounds wegen:

const normalSuperheroes = () => {  
        const filteredHeros = superheroes.filter((hero)=> (hero.weight == 200));
        return filteredHeros.map(hero => hero.name) 
};
console.log(normalSuperheroes());

// 4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad:

const firstAppearance = () => {  
        return superheroes.map((comics)=> (comics.first_appearance));
};
    
console.log(firstAppearance());

// 5. Maak een array met alle superhelden van DC Comics. Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.

const dcComics = () => {
    const dcHeroes =  superheroes.filter((heroesDCcomics)=> (heroesDCcomics.publisher === 'DC Comics'));
    return dcHeroes.map(dchero => dchero.name + ' is published by ' + dchero.publisher)
};
    
console.log(dcComics());

const marvelComics = () => {  
    const marvelHeroes =  superheroes.filter((heroesMarvelComics)=> (heroesMarvelComics.publisher === 'Marvel Comics'));
    return marvelHeroes.map(marvelhero => marvelhero.name + ' is published by ' + marvelhero.publisher)
};
    
console.log(marvelComics());

// 6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue! 
// A) Het gewicht dat je hier ziet, van welk datatype is dat? Een nummer? Of een string? 
// B) Oh ja, en hebben alle superhelden wel een gewicht?

const normalSuperHeroes = () => {
        const filteredHeros = superheroes.filter((hero)=> (hero.publisher == 'DC Comics'));
        const newArray = filteredHeros.map(hero => hero.weight);
        const arrayNum = newArray.map(i=>Number(i));
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return arrayNum.reduce(reducer);
}

console.log(normalSuperHeroes());

// A) Een nummer, omgezet van een string naar een nummer.
// B) Alleen Silver Surfer niet van Marvel.

// 7. Doe hetzelfde met alle superhelden van Marvel Comics

const MarvelnormalSuperHeroes = () => {
        const filteredHerosMarvel = superheroes.filter((marvelHero)=> (marvelHero.publisher == 'Marvel Comics'));
        const newArrayMarvel = filteredHerosMarvel.map(hero => hero.weight);
        const arrayNumMarvel = newArrayMarvel.map(i=>Number(i));
        const arrayExNan = arrayNumMarvel.filter( value => !Number.isNaN(value ));
        const reducerMarvel = (accumulator, currentValue) => accumulator + currentValue;
        return arrayExNan.reduce(reducerMarvel);
}

console.log(MarvelnormalSuperHeroes());

// 8. Bonus

const biggestWeightHero = () => {
        const bigWeightArray = superheroes.map(hero => hero.weight); 
        const bigWeightNumArr = bigWeightArray.map(i=>Number(i));
        const bigWeightExNan = bigWeightNumArr.filter( value => !Number.isNaN(value ));
        const largest = bigWeightExNan.sort((a,b)=>a-b)[bigWeightExNan.length - 1];
        return largest;
}
console.log(biggestWeightHero());

