import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  providers: [MessageService],
})
export class AuthLoginComponent {
  public value!: string;

  public FormSubmitted = false;

  public loginForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  login() {
    this.FormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: (resp) => {
        console.log(resp);
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.msg,
        });
      },
    });
  }

  validField(field: string) {
    if (this.loginForm.get(field)?.invalid && this.FormSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
