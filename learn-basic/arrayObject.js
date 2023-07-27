const evenDataList = arrayObject => {
    return arrayObject.filter(obj => {
        return obj.value % 2 == 0;
    });
}

const oddDataList = arrayObject => {
    return arrayObject.filter(obj => {
        return obj.value % 2 != 0;
    });
}

const maxValueData = arrayObject => {
    return arrayObject.reduce((max, obj) => {
        return obj.value > max.value ? obj : max;
    });
}

const minValueData = arrayObject => {
    return arrayObject.reduce((min, obj) => {
        return obj.value < min.value ? obj : min;
    });
}

const numberOfWord = words => {
    const wordList = words.toLowerCase().replace(/[^\w\s]/gi, '').split(" ");
    const numOfWord = {};
    wordList.forEach(word => {
        if (word in numOfWord){
            numOfWord[word] += 1;
        } else {
            numOfWord[word] = 1;
        }
    });
    return numOfWord;
}

const uniqueWords = words => {
    const wordList = words.toLowerCase().replace(/[^\w\s]/gi, '').split(" ");
    const uniqueWords = new Set(wordList);
    return [...uniqueWords];
}


const arrayObject = [
    { name: 'A', value: 10 },
    { name: 'B', value: 5 },
    { name: 'C', value: 15 },
    { name: 'D', value: 8 }
];

const paragraf = `Saya makan nasi pagi ini, ketika siang saya makan pecal!`;

// console.log("event data list of object: ", evenDataList(arrayObject));
// console.log("odd data list of object: ", oddDataList(arrayObject));
// console.log("maximum value data: ", maxValueData(arrayObject));
// console.log("minimum value data: ", minValueData(arrayObject));
// console.log(numberOfWord(paragraf));
// console.log(uniqueWords(paragraf));
