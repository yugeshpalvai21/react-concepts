import setName, { getDetails, person} from './getDetails.js';

getDetails();

const name = setName('Yugesh');
console.log(name);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFullName());