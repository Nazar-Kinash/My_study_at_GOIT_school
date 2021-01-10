let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
const nbmberOfDroids = prompt('Скільки дроїдів Ви хочете придбаит?')

if(nbmberOfDroids === null){
    console.log('Bідмінено користувачем!');
}
else if(nbmberOfDroids >= 1){
    totalPrice = Number(nbmberOfDroids) * pricePerDroid;
     if(totalPrice > credits){
    console.log('Недостатньо коштів на рахунку');
    }
    else{
        console.log(`Ви придбали ${nbmberOfDroids} дроїдів, на рахунку залишилось ${credits - totalPrice} кредитів`);
    }
   
}else{
    console.log('Вибачте, ви ввели некоректні дані!')
}