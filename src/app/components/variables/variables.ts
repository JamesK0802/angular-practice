import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  courseName : string = "Angular 21";
  currentVersion = "v.21";

  rollNumb:Number = 21;
  prodNum = 21;

  isActive : Boolean = true;
  isJames = false;

  currentDate : Date = new Date();
  stringArr :string[] =["James", "Nicole"];
  arr : number[] = [1,2,3,4];

  nicoleData = {
    name: "Nicole",
    age: 21,
    email:"nicole@gmail.com"
  }

  studentsData = [
    {name:"Nicole", age:21},
    {name:"James", age:21}
  ]

  constructor() {
    this.nicoleData.name = "kelly";

  }

}
