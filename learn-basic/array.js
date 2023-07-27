function oddArrayNumber(arrayNumber) {
    return arrayNumber.filter((number) => {
        return number % 2 != 0;
    });
}

const doubleNumber = arrayNumber => {
    return arrayNumber.map((number) => {
        return number * 2;
    });
}

const allNumberIsEven = arrayNumber => {
    return arrayNumber.every(number => {
        return number % 2 === 0;
    });
}

const someNumberIsEven = arrayNumber => {
    return arrayNumber.some(number => {
        return number % 2 === 0;
    });
}

// acc adalah nilai akumulasi sedangkan cur adalah nilai current dari array
const maxValueNumber = arrayNumber => {
    return arrayNumber.reduce((acc, cur) => {
        return acc > cur ? acc : cur
    });
}

const findNumberArray = (arrayNumber, numToFind) => {
    return arrayNumber.find(number => {
        return number === numToFind;
    });
}

// jika hasil pengurangan negatif maka a diletakkan sebelum b
const sortArrayNumber = arrayNumber => {
    return arrayNumber.sort((a, b) => {
        return a - b;
    });
}

// alternatif loop
const loopArrayEven = arrayNumber => {
    arrayNumber.forEach(number => {
        if (number % 2 === 0) {
            console.log(number);
        }
    });
}

// cek bilangan prima
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// filter bilangan prima pada list 
function filterPrimes(numbers) {
    return numbers.filter(isPrime)
}

const listNumber1 = [1, 2, 3, 4, 5, 6];
const listNumber2 = [4, 2, 8, 6, 11, 13, 15, 17, 20];
// console.log('List Number 1: ', listNumber1);
// console.log('Odd Number: ', oddArrayNumber(listNumber1));
// console.log('Double Number: ', doubleNumber(listNumber1));
// console.log('\nList Number 2: ', listNumber2);
// console.log('Sort array :', sortArrayNumber(listNumber2));
// console.log('All number is Even: ', allNumberIsEven(listNumber2));
// console.log('Some number is Even: ', someNumberIsEven(listNumber2));
// console.log ('Max value is: ', maxValueNumber(listNumber2));
// console.log (`Find number :`, findNumberArray(listNumber2, 2));
// loopArrayEven(listNumber2)
console.log("Bilangan prima: ", filterPrimes(listNumber2));
