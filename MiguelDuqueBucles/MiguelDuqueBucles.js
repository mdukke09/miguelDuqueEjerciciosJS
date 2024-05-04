// 1. Tabla de multiplicar
let num = prompt("Ingrese un número para ver su tabla de multiplicar");
for(let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// 2. Acumulación de números
let sum = 0;
let input;
do {
    input = parseInt(prompt("Ingrese un número (0 para terminar)"));
    sum += input;
} while(input !== 0);
console.log(`La suma de los números ingresados es ${sum}`);

// 3. Juego de adivinar el número
let secretNumber = 78;
let guess;
let attempts = 0;
do {
    guess = parseInt(prompt("Adivine el número secreto (entre 1 y 100)"));
    attempts ++;
    if(guess < secretNumber) {
        console.log("El número ingresado es menor al número secreto");
    } else if(guess > secretNumber) {
        console.log("El número ingresado es mayor al número secreto");
    }
} while(guess !== secretNumber);
console.log(`¡Felicitaciones! Adivinaste el número secreto en ${attempts} intentos`);

// 4. Verificar si un número es primo
let number = parseInt(prompt("Ingrese un número para verificar si es primo"));
let esPrimo = true;
for(let i = 2; i <= number / 2; i++) {
    if(number % i === 0) {
        esPrimo = false;
        break;
    }
}
if (esPrimo){
    console.log(`${number} es un número primo`);
} else {
    console.log(`${number} no es un número primo`);
}

// 5. Mostrar todos los divisores de un número
let num5 = parseInt(prompt("Ingrese un número para ver sus divisores"));
console.log(`Los divisores de ${num5} son:`);
for(let i = 1; i <= num5; i++) {
    if(num5 % i === 0) {
        console.log(i);
    }
}

// 6. Recorrer un array y mostrar sus elementos
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < array6.length; i++) {
    console.log(array6[i]);
}

// 7. Mostrar el doble de cada elemento de un array
let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < array7.length; i++) {
    console.log(array7[i] * 2);
}

// 8. Mostrar un mensaje de presentación por cada elemento de un array
let family = [
    {name: "Javier", age: 73, role: "padre", occupation: "jubilado"},
    {name: "Luz Marina", age: 63, role: "madre", occupation: "jubilada"},
    {name: "Viviana", age: 42, role: "hija mayor", occupation: "enfermera"},
    {name: "Jhoan", age: 32, role: "hijo del me...", occupation: "contador"},
    {name: "Miguel", age: 29, role: "hijo menor", occupation: "desarrollador"}
];
for(let i = 0; i < family.length; i++) {
    console.log(`Hola, soy ${family[i].name}, tengo ${family[i].age} años, soy el ${family[i].role} de la familia y trabajo como ${family[i].occupation}`);
}

// 9. Mostrar solo los números impares de un array
let array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < array9.length; i++) {
    if(array9[i] % 2 !== 0) {
        console.log(array9[i]);
    }
}

// 10. Calcular la suma de los números pares e impares
let sumPares = 0;
let sumImpares = 0;
let input10;
do {
    input10 = parseInt(prompt("Ingrese un número (0 para terminar)"));
    if(input10 % 2 === 0) {
        sumPares += input10;
    } else {
        sumImpares += input10;
    }
} while(input10 !== 0);
console.log(`La suma de los números pares es ${sumPares} y la suma de los números impares es ${sumImpares}`);

// 11. Mostrar el número más grande de un array
let array11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = array11[0];
for(let i = 1; i < array11.length; i++) {
    if(array11[i] > max) {
        max = array11[i];
    }
}
console.log(`El número más grande del array es ${max}`);

// 12. Mostrar el número más chico de un array
let array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = array12[0];
for(let i = 1; i < array12.length; i++) {
    if(array12[i] < min) {
        min = array12[i];
    }
}
console.log(`El número más chico del array es ${min}`);

// 13. Juego de piedra, papel o tijeras
let player1 = prompt("Ingrese el nombre del primer jugador");
let player2 = prompt("Ingrese el nombre del segundo jugador");
let mano1, mano2;
do {
    mano1 = parseInt(prompt(`${player1}, ¿qué eliges? (1. piedra, 2. papel o 3. tijeras)`));
    mano2 = parseInt(prompt(`${player2}, ¿qué eliges? (1. piedra, 2. papel o 3. tijeras)`));
    if(mano1 == mano2) {
        console.log("Empate, vuelvan a jugar");
    } else if((mano1 == "1" && mano2 == "3") || (mano1 == "2" && mano2 == "1") || (mano1 == "3" && mano2 == "2")) {
        console.log(`¡Felicitaciones ${player1}, has ganado!`);
    } else {
        console.log(`¡Felicitaciones ${player2}, has ganado!`);
    }
} while(mano1 == mano2);

// 14. Imprimir un triángulo de 5 asteriscos de lado
for(let i = 1; i <= 5; i++) {
    let msj = '';
    for(let j = 1; j <= i; j++) {
        msj += '*';
    }
    console.log(msj);
}


// 15. Imprimir un triángulo de 5 asteriscos de lado pero invertido
for(let i = 5; i >= 1; i--) {
    let msj = '';
    for(let j = i; j >= 1; j--) {
        msj += '*';
    }
    console.log(msj);
}

// 16. Ordenar un array de 10 números desordenados
let array16 = [5, 2, 8, 1, 3, 7, 6, 4, 9, 10];
for(let i = 0; i < array16.length; i++) {
    for(let j = i + 1; j < array16.length; j++) {
        if(array16[i] > array16[j]) {
            let temp = array16[i];
            array16[i] = array16[j];
            array16[j] = temp;
        }
    }
}
console.log(`El array ordenado es: ${array16}`);