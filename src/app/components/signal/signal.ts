import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent {
  // courseName : String = "Angular 21";
  courseName= signal("Angular 21")
  rollNo = signal(211)
  student = signal({name : "Nicole", city : "Canberra"})
  cityList = signal(["canberra","sydney","melbourne"])

  courseName2 : Signal<String> = signal("Angular 1212")
  constructor() {
    console.log('Before '+this.courseName)
    setTimeout(() => {
      this.courseName.set("React Js"); 
      console.log('After '+this.courseName)
    }, 3000)
  }

  changeCourse() {
    this.courseName.set("Java");
  }
}
