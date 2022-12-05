// class Governor {
//      constructor(age,party,hometown,pollRating){
//      this.age = age;
//      this.party = party;
//      this.hometown = hometown;
//      this.pollRating = pollRating;
//      }

//     static partyAffs (){
//         return ['democrat', 'republican', 'green'];
//      }
     
//      static polls(pollRating){
//         if (pollRating > 50){
//             console.log("Great job!");
//         } else{
//             console.log("Your polls could be better");
//         }
//      }

//     //  static polls(){
//     //     if (this.pollRating > 50){
//     //         console.log("Great job!");
//     //     } else{
//     //         console.log("Your polls could be better");
//     //     }
//     //  }
//      static seniority (){
//         if (this.age>80){
//             console.log("Maybe it's time to retire back to " + this.hometown);
//         } else {
//             console.log("You're a great " + this.party);
//         }
//      }
//     }
// const gov1 = new Governor(90,Governor.partyAffs()[2],"Boston", 51);
// console.log(gov1);
// console.log(Governor.partyAffs()[0]);

class Person {
    constructor(name, age, height){
    this.name=name;
    this.age=age;
    this.height=height;
    }
    getName(){
        return `${this.name}`;
    }
    getAge(){
        return `${this.age}`;
    } 
    getHeight(){
        return `${this.height}`;
    }
}
class PostalWorker extends Person{
    abc(){console.log("This is the Postal Worker method");
    }    
}
class Chef extends Person{
    dec(){console.log("This is the Chef worker method");
    }
}

let Jack= new PostalWorker("Jim", 50, 120);
let Bob= new PostalWorker("bill", 60, 140);
// console.log(Jack);
// Jack.abc();
console.log(Jack.getHeight());


let chef1= new Chef("Ronald", 20, 100);
let chef2= new Chef("King", 30, 200)
// console.log(chef2);
// chef2.dec();
