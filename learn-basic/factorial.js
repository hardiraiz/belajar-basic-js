const factorial = num => {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}

function fibionachi(num) {
    let result = [0, 1];
    if (num <= 2) {
        return result.slice(0, num);
    }

    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    
    return result;
}

// console.log(factorial(5));
console.log(fibionachi(5));
