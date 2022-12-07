// function minusOne(num){
//     return num-1;
// }
// console.log(minusOne(10));

// function makeSentence(a,b,c){
//     return "For real " + a+ " "+ b+ " " + c + " " + "right now";
// }
// console.log(makeSentence("I","need","pizza"))

// function getLastElement(arr){
//     return arr[arr.length-1];
// }
// console.log(getLastElement(['a','b','c','d','e','f','g']));

// ****HOMEWORK BELOW****

// class Hamster {
// constructor(owner, name, price){

//      this.owner = owner;
//      this.name = name;
//      this.price = 15;
//      }
//      wheelRun(){
//         console.log("squeak squeak");
          
//     }
//     eatFood(){
//         console.log("nibble nibble");
//     }
//     getPrice(){
//         return this.price;
//     }
// }

// class Person {
//     constructor(name,age,height,weight,mood,hamsters,bankAccount){
//         this.name=name;
//         this.age=0;
//         this.height=0;
//         this.weight=0;
//         this.mood=0;
//         this.hamsters=[];
//         this.bankAccount=0;
//     }

//     getName(){
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
//     getWeight(){
//         return this.weight;
//     }
//     greet(){
//         console.log("Hi "+this.name);
//     }
//     eat(){
//         return this.weight +=1, this.mood +=1;
//     }
//     exercise(){
//         return this.weight-=1;
//     }
//     ageUp(){
//         return this.age+=1,this.height+=1,this.weight+=1,this.mood-=1,this.bankAccount+=10;
//     }
//     buyHamster(hamster){
//         return this.hamsters.push(hamster), this.mood+=10, this.bankAccount-=hamster.getPrice();
//     }
// }

// const per = new Person("Timmy");

// for (let i=1;i<=15;++i){
//     per.ageUp();

// }
// for (let i=1;i<=8;++i){
//      per.eat();
//  }

// for (let i=1;i<=7;++i){
//     per.exercise();
// }

// console.log("Younger Timmy ");
// console.log(per);

// const ham = new Hamster("Timmy","Gus");

// console.log(ham);

// console.log(per.buyHamster(ham));
// console.log("After Timmy buys Gus ");
// console.log(per);

// ****Chef Makes Dinners****

class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer=appetizer;
        this.entree=entree;
        this.dessert=dessert; 
    }
}

class Chef {
    constructor(base,protein,vegetable){
        this.base=base;
        this.protein=protein;
        this.vegetable=vegetable;
        this.dinners = [];
    }
    cookFood() {
        const newDish = new Dinner(this.base, this.protein, this.vegetable, this.dinners.length);
        this.dinners.push(newDish);
    }
    findFood(index){
        return this.dinners[index];
    }
}

const eat = new Chef('wings','pizza','ice cream');
eat.cookFood();
eat.cookFood();
eat.cookFood();
console.log(eat);