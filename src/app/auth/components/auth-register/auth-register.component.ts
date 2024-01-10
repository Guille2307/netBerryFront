import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent {
  value!: string;

  public registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  createUser() {
    console.log(this.registerForm.value);
  }
}
