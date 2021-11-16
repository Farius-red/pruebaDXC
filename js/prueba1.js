let index;
let numeros = [];
let mayor = [];
let nMayores = [];
const encontrarMayores = (array) => {

    numeros = array;
    if (mayor.length > 0) {
        nMayores.push(mayor[0]);
        while (mayor.length > 0) {
            mayor.shift();
        }
    }

    for (let i = 0; i < array.length; i++) {
        const numero = array[i];

        index = i - 1;

        if (i <= 0) mayor.push(numero);


        if (i > 0) {


            if (numero > mayor[0]) {
                mayor.shift();
                mayor.push(numero);

            };



        }
    }
    numeros[numeros.findIndex(e => e == mayor[0])] = -1;
    return numeros;
}

const organizarNumeros = (filtarArray) => {
    debugger
    numeros = encontrarMayores(filtarArray);

    const verificarElementos = []
    for (let i = 0; i < numeros.length; i++) {
        const element = numeros[i];
        if (element == -1)
            verificarElementos.push(element);

    }

    if (numeros.length != nMayores.length) {

        organizarNumeros(numeros);

    }



}


organizarNumeros([6, 4, 9, 3, 8]);

console.log(nMayores);