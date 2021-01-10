const ADMIN_PASSWORD = 'pasword';
let massege;

const pasword = prompt('Введіть пароль!');
if(pasword === null){
    massege = 'відмінено користувачем!';
}
else if(pasword === ADMIN_PASSWORD){
    massege = 'Ласкаво посимо!';
}
else{
    massege = 'Доступ заборонено, невірний пароль!';
}
alert(massege)
