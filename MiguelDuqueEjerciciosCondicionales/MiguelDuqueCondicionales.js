// 1.
let num1 = prompt('Ingrese el primer número');
let num2 = prompt('Ingrese el segundo número');
if (num1 > num2) {
  console.log('El primer número es mayor que el segundo');
} else {
  console.log('El primer número NO es mayor que el segundo');
}

// 2.
num1 = prompt('Ingrese el primer número');
num2 = prompt('Ingrese el segundo número');
if (num1 == num2) {
  console.log('Los números son iguales');
} else {
  console.log('Los números son diferentes');
}

// 3.
num1 = prompt('Ingrese el primer número');
num2 = prompt('Ingrese el segundo número');
if (num1 > num2) {
  console.log('El primer número es el más grande');
} else if (num1 < num2) {
  console.log('El segundo número es el más grande');
} else {
  console.log('Los números son iguales');
}

// 4.
num1 = prompt('Ingrese el primer número');
num2 = prompt('Ingrese el segundo número');
let num3 = prompt('Ingrese el tercer número');
if (num1 < num2 && num1 < num3) {
  console.log('El primer número es el más chico');
} else if (num2 < num1 && num2 < num3) {
  console.log('El segundo número es el más chico');
} else {
  console.log('El tercer número es el más chico');
}

// 5.
let persona1 = {
  nombre: prompt('Ingrese el nombre de la persona1'),
  edad: parseInt(prompt('Ingrese la edad de la persona1')),
  altura: parseInt(prompt('Ingrese la altura de la persona1')),
};
let persona2 = {
  nombre: prompt('Ingrese el nombre de la persona2'),
  edad: parseInt(prompt('Ingrese la edad de la persona2')),
  altura: parseInt(prompt('Ingrese la altura de la persona2')),
};
if (persona1.altura > persona2.altura) {
  console.log(persona1.nombre + ' es más alto');
} else if (persona1.altura < persona2.altura) {
  console.log(persona2.nombre + ' es más alto');
}
if (persona1.edad > persona2.edad) {
  console.log(persona1.nombre + ' es mayor');
} else if (persona1.edad < persona2.edad) {
  console.log(persona2.nombre + ' es mayor');
}

// 6.
let nombre = prompt('Ingrese su nombre');
let edad = parseInt(prompt('Ingrese su edad'));
let altura = parseInt(prompt('Ingrese su altura'));
let vision = parseInt(prompt('Ingrese su visión'));
if (edad >= 18 && altura > 150 && vision >= 8) {
  console.log('Estás capacitado para conducir');
} else {
  console.log('No estás capacitado para conducir');
}

// 7.
nombre = 'MIGUEL';
let nombreIngresado = prompt('Ingrese su nombre').toUpperCase().trim();
let pase = prompt('Ingrese su pase (vip o normal)').toUpperCase().trim();
let entrada = prompt('¿Posee entrada? (si o no, s o n, true o false)')
  .toUpperCase()
  .trim();
if (
  nombreIngresado == nombre ||
  pase == 'VIP' ||
  entrada == 'SI' ||
  entrada == 'S' ||
  entrada == 'TRUE'
) {
  if (
    nombreIngresado != nombre &&
    pase != 'VIP' &&
    (entrada == 'S' || entrada == 'SI' || entrada == 'TRUE')
  ) {
    //let deseaUtilizar = prompt('Desea utilizar su entrada? (si o no, s o n, true o false)').toUpperCase().trim();
    let deseaUtilizar = prompt(
      'Desea utilizar su entrada? (si o no, s o n, true o false)'
    )
      .toUpperCase()
      .trim();
    if (
      deseaUtilizar == 'SI' ||
      deseaUtilizar == 'S' ||
      deseaUtilizar == 'TRUE'
    ) {
      console.log('Bienvenido ' + nombreIngresado);
    } else {
      console.log('Adiós ' + nombreIngresado);
    }
  } else {
    console.log('Bienvenido ' + nombreIngresado);
  }
} else {
  let comprar = prompt('¿Desea comprar una entrada?').toUpperCase().trim();
  if (comprar == 'SI' || comprar == 'S' || comprar == 'TRUE') {
    let dinero = parseInt(prompt('¿Cuánto dinero tiene disponible?'));
    if (dinero >= 1000) {
      console.log('Venta de entrada realizada. Bienvenido ' + nombreIngresado);
    } else {
      console.log('No se pudo realizar la venta de la entrada');
    }
  } else {
    console.log('Adiós ' + nombreIngresado);
  }
}

// 8.
let numeroIncognita = 7;

let numeroIngresado = parseInt(
  prompt('Intento 1: Ingresa un número del 1 al 10')
);
if (numeroIngresado == numeroIncognita) {
  console.log('Ganaste, haz adivinado el número.');
} else if (numeroIngresado > numeroIncognita) {
  console.log('El número ingresado es mayor, vuelve a intentarlo');

  numeroIngresado = parseInt(
    prompt('Intento 2: Ingresa un número del 1 al 10')
  );
  if (numeroIngresado == numeroIncognita) {
    console.log('Ganaste, haz adivinado el número.');
  } else if (numeroIngresado > numeroIncognita) {
    console.log('El número ingresado es mayor, vuelve a intentarlo');

    numeroIngresado = parseInt(
      prompt('Intento 3: Ingresa un número del 1 al 10')
    );
    if (numeroIngresado == numeroIncognita) {
      console.log('Ganaste, haz adivinado el número.');
    } else if (numeroIngresado > numeroIncognita) {
      console.log('El número ingresado es mayor, vuelve a intentarlo');
    } else {
      console.log('El número ingresado es menor, vuelve a intentarlo');
    }
  } else {
    console.log('El número ingresado es menor, vuelve a intentarlo');

    numeroIngresado = parseInt(
      prompt('Intento 3: Ingresa un número del 1 al 10')
    );
    if (numeroIngresado == numeroIncognita) {
      console.log('Ganaste, haz adivinado el número.');
    } else if (numeroIngresado > numeroIncognita) {
      console.log('El número ingresado es mayor, vuelve a intentarlo');
    } else {
      console.log('El número ingresado es menor, vuelve a intentarlo');
    }
  }
} else {
  console.log('El número ingresado es menor, vuelve a intentarlo');

  numeroIngresado = parseInt(
    prompt('Intento 2: Ingresa un número del 1 al 10')
  );
  if (numeroIngresado == numeroIncognita) {
    console.log('Ganaste, haz adivinado el número.');
  } else if (numeroIngresado > numeroIncognita) {
    console.log('El número ingresado es mayor, vuelve a intentarlo');

    numeroIngresado = parseInt(
      prompt('Intento 3: Ingresa un número del 1 al 10')
    );
    if (numeroIngresado == numeroIncognita) {
      console.log('Ganaste, haz adivinado el número.');
    } else if (numeroIngresado > numeroIncognita) {
      console.log('El número ingresado es mayor, vuelve a intentarlo');
    } else {
      console.log('El número ingresado es menor, vuelve a intentarlo');
    }
  } else {
    console.log('El número ingresado es menor, vuelve a intentarlo');

    numeroIngresado = parseInt(
      prompt('Intento 3: Ingresa un número del 1 al 10')
    );
    if (numeroIngresado == numeroIncognita) {
      console.log('Ganaste, haz adivinado el número.');
    } else if (numeroIngresado > numeroIncognita) {
      console.log('El número ingresado es mayor, vuelve a intentarlo');
    } else {
      console.log('El número ingresado es menor, vuelve a intentarlo');
    }
  }
}

// 9.
let edadIngresada = parseInt(prompt('Ingrese su edad'));
if (edadIngresada <= 12) {
  console.log('Eres un infante');
} else if (edadIngresada <= 18) {
  console.log('Eres un adolescente');
} else if (edadIngresada <= 45) {
  console.log('Eres un mayor joven');
} else if (edadIngresada <= 100) {
  console.log('Eres un anciano');
} else {
  console.log('¿En realidad tienes esa edad?');
}

// 10.
let jugador1 = prompt('Jugador 1, ingrese PIEDRA, PAPEL o TIJERAS')
  .toUpperCase()
  .trim();
let jugador2 = prompt('Jugador 2, ingrese PIEDRA, PAPEL o TIJERAS')
  .toUpperCase()
  .trim();
if (jugador1 == jugador2) {
  console.log('Han empatado');
} else if (
  (jugador1 == 'PIEDRA' && jugador2 == 'TIJERAS') ||
  (jugador1 == 'PAPEL' && jugador2 == 'PIEDRA') ||
  (jugador1 == 'TIJERAS' && jugador2 == 'PAPEL')
) {
  console.log('Jugador 1 ha ganado');
} else if (
  (jugador2 == 'PIEDRA' && jugador1 == 'TIJERAS') ||
  (jugador2 == 'PAPEL' && jugador1 == 'PIEDRA') ||
  (jugador2 == 'TIJERAS' && jugador1 == 'PAPEL')
) {
  console.log('Jugador 2 ha ganado');
} else {
  console.log('Uno de los jugadores ha hecho trampa');
}

// 11.
let color = prompt('Ingrese un color').toUpperCase().trim();
switch (color) {
  case 'BLANCO':
  case 'NEGRO':
    console.log('Falta de color');
    break;
  case 'VERDE':
    console.log('El color de la naturaleza');
    break;
  case 'AZUL':
    console.log('El color del agua');
    break;
  case 'AMARILLO':
    console.log('El color del sol');
    break;
  case 'ROJO':
    console.log('El color del fuego');
    break;
  case 'MARRON':
  case 'MARRÓN':
    console.log('El color de la tierra');
    break;
  default:
    console.log('Excelente elección, no lo teníamos pensado');
}

// 12.
let valor1 = parseInt(prompt('Ingrese el primer valor numérico'));
let valor2 = parseInt(prompt('Ingrese el segundo valor numérico'));
let operacion = prompt(
  'Ingrese la operación (suma, resta, multiplicación, división)'
)
  .toUpperCase()
  .trim();
switch (operacion) {
  case 'SUMA':
    console.log('El resultado es ' + (valor1 + valor2));
    break;
  case 'RESTA':
    console.log('El resultado es ' + (valor1 - valor2));
    break;
  case 'MULTIPLICACION':
  case 'MULTIPLICACIÓN':
    console.log('El resultado es ' + valor1 * valor2);
    break;
  case 'DIVISION':
  case 'DIVISIÓN':
    if (valor2 != 0) {
      console.log('El resultado es ' + valor1 / valor2);
    } else {
      console.log('ERROR: No se puede dividir por 0');
    }
    break;
  default:
    console.log('Operación ingresada no soportada');
}

// 13.
nombre = prompt('Ingrese su nombre:');
let apellido = prompt('Ingrese su apellido:');
let nDni = parseInt(prompt('Ingrese su DNI:'));
let fechaNacimiento = prompt('Ingrese su fecha de nacimiento (dd/mm/aaaa):');

let mensaje = `Nombre: ${nombre}\nApellido: ${apellido}\nDNI: ${nDni}\nFecha de Nacimiento: ${fechaNacimiento}\n\n¿Están correctos estos datos?`;

let confirmacion = confirm(mensaje);

if (confirmacion) {
  let dni = {
    nombre: nombre,
    apellido: apellido,
    dni: nDni,
    fechaNacimiento: fechaNacimiento,
  };
  console.table(dni);
  console.log('Registro exitoso');
} else {
  console.log('Vuelva a intentarlo en 1 mes');
}
