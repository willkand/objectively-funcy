// Your code here.

/*
getFirstName()

parameters 1 = object
{
    firstName: string,
    lastName: string,
}

getfirstName
*/

function getFirstName(person){
  return person.firstName;
}

console.log(getFirstName({firstName: 'Colin' , lastName:'Jaffe'})) // -> 'Colin'
console.log(getFirstName({firstName: 'Petra', lastName:'Solano'})) // -> 'Petra'

// getLastName

function getLastName (person){
  return person.lastName
}

// getFullName

function getFullName (person){
  return `${person.firstName} ${person.lastName}`
}

/*

parameters: 2
1st parameter
person = {
  firstName: string, 
  LastName: string 
}
newFirstName: string

change firstName of person object to newFirstName
*/

// setFirstName 

function setFirstName(person, newFirstName){
  //person['firstName'] = newFirstName;
  person.firstName  = newFirstName;
}

let person1 = {firstName: 'Colin', lastName: 'Jaffe'};
let person2 = {firstName: 'Petra', lastName: 'Solano'};
setFirstName(person1, 'Redacted');
setFirstName(person2, 'Anthony');

console.log(person1);
console.log(person2);

// setAge

function setAge (age, person) {
  person.age = age
}


// giveBirthday

function giveBirthday (person) {
  if(person.age >= 0){
    person.age += 1
  } else person.age =1 
}

// marry

function marry (per1, per2) {
  per1.married = true
  per2.married = true

  per2.spouseName = per1.firstName + "" + per1.lastName
  per1.spouseName = per2.firstName + "" + per2.lastName

}

// divorce

function divorce(per1, per2){
  per1.married = false
  per2.married = false

  delete per1.spouseName
  delete per2.spouseName
}







// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
