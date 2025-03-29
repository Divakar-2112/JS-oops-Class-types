// class Maths{
//     constructor(num1,num2){
//         this.num1=num1
//         this.num2=num2

//     }
//     add(){
//         let c=this.num1+this.num2;
//         console.log(`Add:${c}`);
        
//     }
//     sub(){
//         let c=this.num1-this.num2;
//         console.log(`Sub:${c}`);
        
//     }
//     multiplication(){
//         let c=this.num1*this.num2;
//         console.log(`Multiplication:${c}`);
        
//     }
//     division(){
//         let c=this.num1/this.num2;
//         console.log(`Division:${c}`);
        
//     }
// }
// const maths1=new Maths(2,2);

// maths1.add();
// maths1.sub();
// maths1.multiplication();
// maths1.division();

// class Vehicle {

//     constructor (color, type){
//         this.color = color
//         this.type = type
//     }
//     honda(){
//         console.log(this.color,this.type);
        
//     }
// }

// class car extends Vehicle {
//      constructor(color, type, varient){
//         super(color,type);
//         this.varient = varient
//      }
//     start(){
//         console.log(this.color,this.type,this.varient);
        
//     }
// }


// const cars = new car("red","petrol","Civic");

// cars.start();



// class Animal {

//     constructor (name,age){
//         this.name = name
//         this.age = age
//     }
//     animals(){
//         console.log(this.name,this.age);
        
//     }
// }

// class Cat extends Animal {
//      constructor(name, age, sound){
//         super(name,age);
//         this.sound = sound
//      }
//     cats(){
//         console.log(`The cat Name is ${this.name} age is ${this.age} and the sound is ${this.sound}`);
        
//     }
// }
// class Dog extends Animal {
//     constructor(name, age, sound){
//        super(name,age);
//        this.sound = sound
//     }
//    dogs(){
//        console.log(`The Dog Name is ${this.name} age is ${this.age} and the sound is ${this.sound}`);
       
//    }
// }


// const myCat = new Cat("Kitten",2,"Meow Meow");
// const myDog = new Dog("Puppy",5,"BoW BoW");

// myCat.cats();
// myDog.dogs();


// class Employee {
//     constructor(name,age,role){
//         this.name=name
//         this.age=age
//         this.role=role

//     }
//     employevalue(){
//         console.log(`Name: ${this.name},Age:${this.age},Role:${this.role}`);
        
//     }
// }
// class Manager extends Employee{
//     constructor(name,age,role,totalemployee){
//         super(name,age,role,totalemployee)
//         this.totalemployee=totalemployee

//     }
//     value(){
//         super.employevalue()
//         console.log(`Manager a Team ${this.totalemployee} employees`);
        
//     }
// }

// const myValue=new Manager("Divakar",23,"Engineer",5);

// myValue.value();


// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     students(){
//         console.log(`My Name is${this.name} and Age is ${this.age}`);
        
//     }
// }
// let value= new Student("Divakar",23);
// value.students()

