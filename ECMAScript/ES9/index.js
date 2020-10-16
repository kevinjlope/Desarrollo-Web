const obj = {
    name: 'Kevin',
    age: 23,
    country: 'EC'
};
let {name, ...all} = obj;
console.log(name, all);

const obj = {
    name:'Kevin',
    age: 23
}
const obj1 = {
    ...obj,
    country:'EC'
}
console.log(obj1);

const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('Hello World'),3000) 
        :reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log('Finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(`La fecha es: ${year} ${month} ${day}`);
/*Otra forma: 
const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
constmatch = regexData.exec('2018-04-20');
const { year, month, day } = match.groups;

console.log(year, month, day); */