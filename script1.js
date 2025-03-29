// Base class

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     details(){
//         console.log(`My name is ${this.name} and my Age is ${this.age}`);
        
//     }
// }

// let myPerson= new Person("Divakar",23);
// myPerson.details();

// Inheritance Class -------------------------------------------------------------------------------

// class Teacher{
//     constructor(degree){
//         this.degree=degree;
//     }
//     teaching(){
//         console.log(`My Degree is ${this.degree}`);
        
//     }
// }
// class Students extends Teacher{
//     constructor(degree,classes){
//         super(degree)
//         this.classes=classes;

//     }
//     section(){
//         console.log(`My Teacher Degree is ${this.degree} and my Class is ${this.classes}`);
        
//     }
// }

// let myValues= new Students ("BA.English","12th");

// myValues.section();

// setter  & Getter ------------------------------------------------------------------------------------

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     get details(){
//         return `${this.name},${this.age}`;
//     }
//     set details(age){
//         if(age<=10){
//             throw new Error("Enter a correct age")
//         }
//         this.age=age;
//     }
// }
// let value= new Person ("Divakar",23);
// console.log(value.details);
// value.details= "25";
// console.log(value.details);



//  Encapsulation -----------------------------------------------------

// class Bank {
//     #bankbal;
//     constructor(bankname,balance){
//         this.bankname=bankname;
//         this.#bankbal=balance;
//     }
//     get bankdetails(){
//         return `Your Bank ${this.bankname} Balance ${this.#bankbal}; `
//     }
//     set bankdetails(updatebalance){
//         if(updatebalance<5000){
//     throw new Error("Your balance Error.")
//         }
//         this.#bankbal=updatebalance;
//     }
// }
// let MyAccount=new Bank("HDFC",5000);
// console.log(MyAccount.bankdetails) ;
// MyAccount.bankdetails=15000;
// console.log(MyAccount.bankdetails);


// Polymorphism --------------------------------------------------------------------

// class A{
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     }
//     area(){
// console.log(this.x*this.y);
//     }
// }
// class B extends A{
//     constructor(x,y,z){
//         super(x,y)
//         this.z=z;
//     }
//     area(){
//         console.log(this.x+this.y+this.z);
        
//     }
// }

// let myvalues=new B (2,4,4);
// myvalues.area();


// Static-----------------------------------------------------------------

// class Bike{
//     static name
//     static bikebrand(){
//        return `My Bike Brand is ${this.name}`;
        
//     }
// }
// Bike.name = "yamaha"
// console.log(Bike.bikebrand());
