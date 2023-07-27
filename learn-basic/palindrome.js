const palindromeCheck = word => {
    const cleanWord = word.toLowerCase().replace(/[\W_]/g, '');;
    let reverseWord = '';

    for (let i = cleanWord.length - 1; i >= 0; i--) {
        reverseWord += cleanWord[i];
    }

    return cleanWord === reverseWord ? true : false;
}

const words = "RaceCar";
console.log(palindromeCheck(words));
