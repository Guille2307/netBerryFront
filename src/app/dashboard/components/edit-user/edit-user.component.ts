import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DashboardService } from '../../services/dashboard.service';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [MessageService],
})
export class EditUserComponent implements OnInit, OnDestroy {
  public FormSubmitted = false;
  public id!: string;
  public user!: User;
  public UserByIdSuscription?: Subscription;
  public editUserSuscription?: Subscription;
  public editUserForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    public dashboardService: DashboardService
  ) {}

  ngOnDestroy(): void {
    this.editUserSuscription?.unsubscribe();
    this.UserByIdSuscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.id = this.authService.uid;
    this.refillFom();
  }

  refillFom() {
    this.UserByIdSuscription = this.authService
      .getUserById(this.id)
      .subscribe((resp: any) => {
        this.editUserForm.reset(resp.user);
      });
  }

  postEditForm() {
    this.FormSubmitted = true;
    if (this.editUserForm.invalid) {
      return;
    }
    this.editUserSuscription = this.dashboardService
      .editUser(this.id, this.editUserForm.value)
      .subscribe({
        next: (resp) => {
          this.messageService.add({
            severity: 'warn',
            summary: 'actualizado',
            detail: 'Usuario actualizado',
            life: 2000,
          });
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
