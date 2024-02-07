import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  providers: [MessageService],
})
export class AuthLoginComponent implements OnDestroy {
  public value!: string;
  public loginSuscription?: Subscription;

  public FormSubmitted = false;

  public loginForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnDestroy(): void {
    this.loginSuscription?.unsubscribe();
  }

  login() {
    this.FormSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loginSuscription = this.authService
      .login(this.loginForm.value)
      .subscribe({
        next: (resp) => {
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
}
