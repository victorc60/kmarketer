
// Четность числа

let number = 19;
let evenNubmer=(number%2 == 0) ? console.log('У вас четное число') : console.log('Ваше число нечетное');



// Аутентификация пользователя 
let haveAccount = false;
let isLoggedIn=  haveAccount ? 'Have account' : 'Do not have account';
console.log(isLoggedIn); 


// Рассчитайте полную цену всего доступного на складе товара на основе наличия на складе
let price = 4;
let quantity = 121;
let existProduct= true;
let notification  = existProduct ? console.log(price * quantity): console.log('Товара нет');


// Высокосный год
let currentYear = new Date().getFullYear();

    let leapYear =
        currentYear % 4 == 0 && (currentYear % 100 !== 0 || currentYear % 400 == 0) ?
        currentYear + " is a leap year" :
        currentYear + " is a non-leap year";

    console.log(leapYear);

// switch

const countryCode = "IT";

switch (countryCode) {
  case "ES":
    console.log("Spain");
    break;
  case "IT":
    console.log("Italy");
    break;
  case "MD":
    console.log("Moldova");
    break;
  case "FR":
    console.log("France");
    break;
  case "D":
    console.log("Germany");
    break;
  case "GR":
    console.log("Greece");
    break;
  
  default:
    console.log("Sorry, " + countryCode + " is out of the country codes list.");
}


// Switch Task 2
const examScore = "93";

switch (true) {
  case examScore >= 97 && examScore <= 100:
    console.log("Grade A+");
    break;
  case examScore >= 93:
    console.log("Grade A");
    break;
  case examScore >= 90:
    console.log("Grade A-");
    break;
  case examScore >= 87:
    console.log("Grade B+");
    break;
  case examScore >= 83:
    console.log("Grade B");
    break;
  case examScore >= 80:
    console.log("Grade B-");
    break;
  case examScore >= 77:
    console.log("Grade C+");
    break;
  case examScore >= 73:
    console.log("Grade C");
    break;
  case examScore >= 70:
    console.log("Grade C-");
    break;
  case examScore >= 67:
    console.log("Grade D+");
    break;
  case examScore >= 63:
    console.log("Grade D");
    break;
  case examScore >= 60:
    console.log("Grade D-");
    break;
  case examScore >= 0:
    console.log("Grade F");
    break;
  default:
    console.log(`${examScore} + " is undefined. To find out exam grading scale, please enter another exam score.`);
}



// FUNCTION TASK 1
function tellFortune(X, Y, Z, N) {

    let childrenNumber = N;
    let partnerName = Z;
    let continent = Y;
    let post = X;

    let yourFuture = `You will be a ${X} in ${Y}, and will get married to ${Z} with ${N} kids`;
    console.log(yourFuture);
}
tellFortune("painter", "South America", "Carlos", "4");


// Function 2

function calculateDogAge(age) {
    let dogAge = age * 7;
    let dogAgeMessage = `Your dog is ${dogAge} years old in dog years!`;

    console.log(dogAgeMessage);
}
calculateDogAge("3"); 
calculateDogAge("5"); 
calculateDogAge("8");

// Bonus task
let  CalculationSupply = (currentAge, kgFood,maxYears)=>{
    let calc = kgFood*(maxYears-currentAge)*365;
    console.log(`Вам понадобится ${calc} кг еды, чтобы продержаться до глубокой старости ${maxYears} лет`)
}
CalculationSupply('3','1','50');
CalculationSupply('4','10','55');
CalculationSupply('5','20','65');



// ARRAY TASK 1

let fruits = [];
fruits.push('apple');
fruits.push('banana');
fruits.push('orange');
console.log(fruits.length);//
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);



// ARRAY TASK 2 


let numbers = [1, 2, 3, 4, 5]

let removeNUMBERS = numbers.pop();
console.log(removeNUMBERS);

removeNUMBERS =numbers.shift();
console.log(numbers);


// ARRAY TASK3 

let colors = ['red', 'green', 'blue', 'yellow'];
console.log(colors.indexOf('green'));

let hasOrange = colors.includes('orange');
console.log(hasOrange);


// ARRAYS TASK 4 

let names = ['John','Jane', 'Mike', 'Jenifer'];
names.unshift('David');
console.log(names);


console.log(names.indexOf('Mike'));

// ARRAY TASK 5
let newNumbers=[2,4,6,8,10];
if (newNumbers.includes(5)){
  console.log('Содержит данную цифру')
}
else{
  console.log('Несодержит данную цифру')

};

newNumbers.push(12);
console.log(newNumbers);


// ARRAY TASK 6

let months = ['january', 'february', 'march', 'april', 'may', 'june','july', 'august','september','october','november','december'];

console.log(months.sort())


const result = months.filter((word) => word.length > 3);
console.log(result);

const sliceResult = months.slice(5,10);
console.log(sliceResult);

const exEight = `String with months: ${months.filter((word) => word.length >= 5)}`
console.log(exEight);



//////////////////// LESSON 18/////////////////// 

// Task 1 
let fruit = [ 'apple', 'banana', 'orange'];
for(i = 0;i<fruit.length; i++){
  console.log(fruit[i]);
}

// Task 2 
numBers = [1, 2, 3, 4, 5];
let sum=0;

for(i=0; i<numBers.length; i++){
    sum= sum + numBers[i];
}
console.log(sum);

// Task 3 
naMes = ['John', 'Jane', 'Mikhael', 'Jennifer', 'Bobby'];
let nameLength = [];
for(i=0; i < naMes.length; i++){
  let numbersOfNames = naMes[i].length;
  nameLength.push(numbersOfNames);
}
console.log(nameLength);


// Task 4 
let company = [
              [1, 2, 3, 4],
              ['ion', 'misha', 'petru', 'jenea', 'lesha', 'liza', 'vitea'],
              ];


let nameWorkers = company[1];

for(i=0; i < nameWorkers.length; i++){
  console.log(nameWorkers[i]);
}

let sortNamesWorkers = nameWorkers.sort();
console.log(sortNamesWorkers);

// Object 1 
const persons = { name: 'John',
                  surname: 'Doe', 
                  age: 30, 
                  profession: 'developer' 
                }; 

    const keys = Object.keys(persons);
    console.log(keys.length);



    // Object 2 
    let n = 4;

    let numberList = [...Array(n).keys()].map(i => i + 1);
    console.log(numberList); 


    // Object 3 
   
    const arrayValues = [5, 8, 2, 10, 3];
    let bigOne= 0;
    
    for(let i=0; i <=arrayValues.length; i++){
      if(arrayValues[i]>=bigOne){
        bigOne=arrayValues[i];
      }
    }
    console.log(bigOne);
         
    

// Object 4 
let marks = { math: 8, 
              literature: 7, 
              history: 9 };


  function averegeMarksF(){            
        let sumOfMarks = 0;
        let marksValues=Object.values(marks);

        console.log(marksValues);


        for(i=0; i < marksValues.length; i++){
          sumOfMarks= marksValues[i]+sumOfMarks;
        }
        console.log(sumOfMarks);


        let averegeMark = sumOfMarks / marksValues.length;
        console.log(averegeMark);
  };

  averegeMarksF();

  // Object 5 


 
  function Dog(nickname, age, color) {
    this.name = nickname
    this.age = age
    this.color = color
    this.puppiesNames = [];
}

  function addPuppies(dog, puppiesNumber) {
    for (let i = 1; i <= puppiesNumber; i++) {
        dog.puppiesNames.push("Puppy" + i);
    }
console.log(myDog)
}

let myDog = new Dog("Jack", 5, "black");

addPuppies(myDog, 5);



// LESSON 19
console.log('/////////LESSON 19//////////')

// Task 1
let personality = {
  name: 'John',
  age: 30,
  city: 'New-York'
}
function info(user) {
  let keys = Object.keys(user);
  let i19 = 0;
  while(i19 < keys.length) {
      let key = keys[i19];
      console.log(`${key}: ${user[key]}`);
      i19++;
  }
} 
info(personality); 

// Task 2 

let user19 = { name: 'John', age: 30, city: 'New-York' };
let key19 = 'age'; 
 function searchKey(object19, key19){

for(let x in object19){
    if(x == key19){
      return true
    }
}
 }
 console.log(searchKey(user19,key19))


//  Task3 

let phrase = {
  prop1: 'Hello',
  prop2: 'World',
  prop3: '!'
}
function concatWords(obj19) {
  let newPhrase = '';
  let keys = Object.keys(obj19);
  let i = 0;
  do{
      let key = keys[i];
      let value = obj19[key];
      newPhrase += value;
      i++;
  } while (i < keys.length);
  return newPhrase;
}  
console.log(concatWords(phrase));


// Task 4 

let string19 = 'Hello world, my name is Albert'

function vowels(stringDefault) {
  if (typeof stringDefault === 'string') {  
    let lowerString = stringDefault.toLowerCase();
    let vowelsList = ['a','e','i','o','u','y'];
    let vowelsCount = 0;
    let i = 0;
    while(i < stringDefault.length) {
        let stringValue = lowerString[i];
        if(vowelsList.includes(stringValue)){
            vowelsCount ++;
        }
        i++
    }
    return vowelsCount;
  } else {
    console.error('Wrong format');
  }
}
console.log(vowels(string19));

// Task 5 
let students19 = { John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] }





function getAverageScore(scores){
  let averageScore = Object.assign({},scores);

    for (Element in scores) {

        let value = scores[Element];

        let i = 0;
        let sum = 0;
        let arrayLength = value.length;

        while (i < arrayLength) {
            sum += value[i];
            i++;
        }
        let medium = sum / arrayLength;
        averageScore[Element] = `medium: ${medium}`;
    }
    return averageScore;
};
console.log(getAverageScore(students19))


// Task 6 



let initialString = 'Hello, world!';

function reverseString(string) {
  let stringArray = string.split('');
  let newStringArray = [];

  let newString = newStringArray.join('');
  let i = stringArray.length;
  do{
      i--;
      newString += stringArray[i];
  } while (i > 0);
  return newString;
}
console.log(reverseString(initialString));

// Task 7 


let polindrome = 'level';

function checkPolindrome(inputString){
  reverseString(inputString);
  let reversePolindrome = reverseString(inputString);

if(polindrome === reversePolindrome){
  console.log(true);
}
else{
  console.log('not polindrome');
}
}

checkPolindrome(polindrome);



console.log('LESSON 20!');

// TASK1
const studentGrades = [
  { name: "Anna", note: 9 },
  { name: "Denis", note: 7 },
  { name: "Cristian", note: 8 },
  { name: "Daniel", note: 6 },
  { name: "Elena", note: 10 }
];

const reducer = studentGrades.reduce((acc, val)=>{
 
  return acc + val.note;
  },0
)
console.log(reducer/studentGrades.length);

// TASK2

const products = [
  {name: "Tshirt", price: 50, isAvailable: true },
  {name: "Pants", price: 80, isAvailable: false },
  {name: "Jacket", price: 120, isAvailable: true },
  {name: "Shirt", price: 60, isAvailable: true },
  {name: "Skirt", price: 40, isAvailable: false }
];

const inStock = products.filter(product=>product.isAvailable).map(product=> product.name)
console.log(inStock);

// Task 3 

const numbersArray =  [10, 5, 8, 15, 3, 20];
 let maxNumber = numbersArray.reduce((acc, val)=>{
if(acc>val){
  return acc;
}
else {
  return val;
}
 },numbersArray[0])
 console.log(maxNumber);

//  Task 4 



function calculateAverageMarks(students) {
  const result = {};

  students.forEach(student => {
    const studentName = Object.keys(student)[0]; 
    const marks = student[studentName]; 
    
    const averageMark = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

    result[studentName] = averageMark;
  });

  return result;
}

const studentMarks = [
  { John: [8, 7, 9] },
  { Mary: [9, 9, 10] },
  { Alex: [6, 8, 7] }
];

const averageMarks = calculateAverageMarks(studentMarks);
console.log(averageMarks);


console.log('LESSON 21');
// Task 1 

let student21 = {
    name: 'John',
    lastName: 'Doe',
    faculty: 'history',
    year: 3
};

const arrayOfStudent = (obj21)=>{
  const {name, lastName, faculty,year}= student21;

  const arrayForStudent = [];
  let fullName21 = name + ' ' + lastName;

  arrayForStudent.push(fullName21, faculty,year);

  return arrayForStudent;

}
let result21 = arrayOfStudent(student21);
console.log(result21);

// Task 2 

const colors21 = ['red', 'green', 'blue', 'violet']


const returnElements=(array21)=>{
   const [el1, , el3]= array21;
  console.log(el1);
  console.log(el3);
}

let returnEl = returnElements(colors21);

// Task 3 

const arrayOfNumbers = [1,2,3,4,56,7,8,9,6,3,324,321,124,56,75]

function returnNumbers(arrayNum){
  const [...rest] = arrayNum
  console.log(rest);
}
returnNumbers(arrayOfNumbers);

// Task 4 
const arrayName = ['Ion', 'Petea', 'Tolik','Vasea'];
const arrayNum21 = [21, 92, 23,54];

function getTogether(arr1,arr2){
  let newArray21 = [...arr1,...arr2];
  console.log(newArray21);
}
getTogether(arrayName,arrayNum21);

// Task5 

let newParametr = {language: 'English'}


function addParametr(par1, par2){

const newStudent21={...par1,...par2}
console.log(newStudent21);

}
addParametr(student21,newParametr);


// Task6 



let input21 = 'did';

function newString(inputString){
  const duplicates = [];
  const singleTime = [];
  const encounteredLetters = {}; 

  const lowercasedString = inputString.toLowerCase();

  for (let i = 0; i < lowercasedString.length; i++) {
    const letter = lowercasedString[i]; 

    if (encounteredLetters[letter])  { //не совсем понял как эта строчка работает
      duplicates.push(letter);
    } else {
      encounteredLetters[letter] = true;
      singleTime.push(letter);
    }
  }

  return { duplicates, singleTime };
}
const inputString = "recede";
const { duplicates, singleTime } = newString(inputString);
console.log("Повторяющиеся буквы:", duplicates); 
console.log("Неповторяющиеся буквы:", singleTime);

newString(input21);

function makeBracket() {
  let letter21= {};
  let finArray= [];

  for(let i = 0; i<inputString.length; i++)
  {
    let item21 = inputString[i];
    if(letter21[item21]){
      finArray.push(')');
    }
    else{
      letter21[item21]= true;
      finArray.push('(')
    }
  }
  console.log(finArray);



}
makeBracket(inputString);

// // Task 7
let arrayNum7= [2,4,6,8,10,3]

function checkNumber(array7){
  let evenCount = [];
  let oddCount = [];
  
  for(let i = 0; i<array7.length;i++){
    if(array7[i] %2 ===0){
      evenCount.push(array7[i])
    }
    else{
      oddCount.push(array7[i])
    }
  }
  if(evenCount.length<oddCount.length){
    console.log(evenCount);
  }
  else{
    console.log(oddCount);
  }
}
checkNumber(arrayNum7);


// Freestyle 
let styleFor






