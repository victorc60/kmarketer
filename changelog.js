
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



