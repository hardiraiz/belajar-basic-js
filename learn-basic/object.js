const arr = [1, 3, 4, 1];

const uniqueSet = new Set(arr);
// const uniqueArr = Array.from(uniqueSet);
const uniqueArr = [...uniqueSet];

// console.log(uniqueArr);

let myArray = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Mike' }
];

let uniqueArray = [...new Set(myArray.map(JSON.stringify))].map(JSON.parse);

// console.log(uniqueArray);

for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0);
}
