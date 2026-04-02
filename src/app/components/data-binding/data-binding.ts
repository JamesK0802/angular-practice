import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})

export class DataBinding {
  courseName = "Angular_21 Tutorial";
  cityName = "Canberra";
  className = "primary";
  inputType = "date";
  showWelcomeMessage() {
    alert("Welcome")
  }
  onStateChanged() {
    alert("State Changed")
  }
  changeCourseName(text:string) {
    this.courseName = text;
  }
}
