//import numeral from 'numeral';


function randomNumbers(from, to, length) {
    const numbers = [0];
    for (let i = 1; i < length; i++) {
        numbers.push(Math.ceil(Math.random() * (from - to) + to));
    }
    return numbers;
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// export function formatDecimal(value) {
//     // Convertir el valor a string y separar la parte entera y la decimal
//     let [integerPart, decimalPart] = value.toString().split('.');

//     // Agregar separador de miles
//     integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

//     // Asegurar que la parte decimal tenga siempre dos dígitos
//     decimalPart = decimalPart ? (decimalPart.length === 1 ? decimalPart + '0' : decimalPart) : '00';

//     // Combinar la parte entera y la parte decimal con una coma
//     return `${integerPart},${decimalPart}`;
// }



/**
 * Formato YYYY-MM-DD
 */
function formatNowToDB() {
    const today = new Date();
    return today.toISOString().split('T')[0]; 
}

function format30DaysFromNowToDB() {
    const today = new Date();
    today.setDate(today.getDate() + 30);
    return today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
}




function formatNumber(number) {
	let formattedNumber = numeral(number).format('0,0.00');
	formattedNumber = formattedNumber.replace(/,/g, '#').replace(/\./g, ',').replace(/#/g, '.');
	return formattedNumber;
}


export {
    randomNumbers,
    delay,
    formatNowToDB,
    format30DaysFromNowToDB,
    formatNumber
}