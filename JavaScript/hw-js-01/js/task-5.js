const usersCountry = prompt('В яку країну Вам потрібна доставка?');
let pryce;

if(usersCountry === null){
alert('відмінено користувачем!');
}
else{
switch(usersCountry.toLowerCase()){
    case 'китай':
        pryce = 100;
        alert(`Доствака в країну ${usersCountry}, буде коштувати ${pryce} кредтитів`);
        break;
    case "чилі":
        pryce = 250;
        alert(`Доствака в країну ${usersCountry}, буде коштувати ${pryce} кредтитів`);
        break;
    case "австралія":
        pryce = 170;
        alert(`Доствака в країну ${usersCountry}, буде коштувати ${pryce} кредтитів`);
        break;
    case "індія":
        pryce = 80;
        alert(`Доствака в країну ${usersCountry}, буде коштувати ${pryce} кредтитів`);
        break;
    case "ямайка":
        pryce = 120;
        alert(`Доствака в країну ${usersCountry}, буде коштувати ${pryce} кредтитів`);
        break;
    default:
        alert('Вибачте, у Ваше країну доставка не доступна')
}
}
