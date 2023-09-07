let weightSarah = 65;
   let WeightBob = 93;
   let heightSarah =1.75;
   let heightBob =1.89;


//    Рассчитываю индекс массы тела ИМТ (BMI)) для Сары и Боба

let sarahBMI = weightSarah / Math.pow(heightSarah, 2);
console.log(sarahBMI);
let bobBMI = WeightBob / Math.pow(heightBob, 2);
console.log(bobBMI);

// Использую операторы if/else
if (sarahBMI < 18.5){
    console.log('У Сары недостаточный вес')
};

if (sarahBMI>18.5 && sarahBMI<25)
{
    console.log('У Сары нормальный вес');
};

if(bobBMI<18.5 ||bobBMI >25)
{
    console.log('У Боба недостаточный или избыточный вес');
}
else{
    console.log('У Боба нормальный вес');
};