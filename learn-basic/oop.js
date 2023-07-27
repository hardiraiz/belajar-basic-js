// class dan object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person("John Doe", 30);
person.sayHello();


// inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak()  {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Buddy");
dog.speak() // Buddy barks


// Enkapsulasi
function Person2(name, age) {
    let _name = name;
    let _age = age;

    this.getName = function() {
        return _name;
    };

    this.getAge = function() {
        return _age;
    }
}

const person2 = new Person2("John Doe", 30);
console.log(person2.getName());
console.log(person2.getAge());


// Polimorfisme
class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const rectangle = new Rectangle(5, 3);
const circle = new Circle(4);

console.log(rectangle.area());
console.log(circle.area());
