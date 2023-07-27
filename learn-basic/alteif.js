const car = 'Datsun';

const carTankCapacity = {
    'Alto': '4.5L',
    'Datsun': '5.2L'
}[car] || 'Nothing to display';

console.log(carTankCapacity);