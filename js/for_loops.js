//2
 function showMultiplicationTable(input){
    for (var x = 1; x < 10; x++){
        console.log((input + '*' + x + '=' + (input * x)))
    }
}
showMultiplicationTable(1);
showMultiplicationTable(2);
showMultiplicationTable(3);
showMultiplicationTable(4);
showMultiplicationTable(5);
showMultiplicationTable(6);
showMultiplicationTable(7);
showMultiplicationTable(8);
showMultiplicationTable(9);
showMultiplicationTable(10);

//3
for ( i = 1; i < 10; i++){
   var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 === 0){
       console.log( randomNumber + ' is an even number.');
    } else {
       console.log( randomNumber + ' is an odd number.');
    }
}

//4
for (var i = 1; i <= 9; i++){
   console.log(i.toString().repeat(i));
}

//5
for (i = 100; i >= 5; i -=5){
    console.log(i)
}