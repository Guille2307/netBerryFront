import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
  providers: [MessageService],
})
export class AuthRegisterComponent implements OnDestroy {
  public value!: string;
  public FormSubmitted = false;
  public registerSuscription?: Subscription;

  public registerForm = this.fb.group({
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
    this.registerSuscription?.unsubscribe();
  }

  createUser() {
    this.FormSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.registerSuscription = this.authService
      .createUser(this.registerForm.value)
      .subscribe({
        next: (resp) => {
          this.messageService.add({
            severity: 'warn',
            summary: 'Successful',
            detail: 'Usuario Creado',
            life: 2500,
          });
          this.router.navigateByUrl('login');
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
