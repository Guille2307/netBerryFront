import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
  providers: [MessageService],
})
export class AuthRegisterComponent {
  public value!: string;
  public FormSubmitted = false;

  public registerForm = this.fb.group({
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

  createUser() {
    this.FormSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.createUser(this.registerForm.value).subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Successful',
          detail: 'Usuario Creado',
          life: 2500,
        });
        setTimeout(() => {
          this.router.navigateByUrl('login');
        }, 1500);
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
    if (this.registerForm.get(field)?.invalid && this.FormSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
