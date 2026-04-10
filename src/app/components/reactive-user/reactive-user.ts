import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUser {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl(''),
  });
}
