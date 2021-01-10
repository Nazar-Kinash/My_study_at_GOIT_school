
let total = 0;
let input;
do {    
    input = prompt('Введіть число');
    if(Number.isNaN(input)){
    alert('Некоректні дані, введіть число')
    }
    else{
    total =  total + Number(input);
    }
}
while(input != null);
alert(`Сума введених чисел: ${total} :)`);
