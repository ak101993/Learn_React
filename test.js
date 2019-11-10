"use strict";
const person={
  name:"Akshay Kumar",
  learnJs(){
    console.log(this);
  }
}

person.learnJs();

// const learn=person.learnJs;
const learn=person.learnJs.bind(person);
learn();
