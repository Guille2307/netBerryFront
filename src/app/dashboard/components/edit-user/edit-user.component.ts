import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DashboardService } from '../../services/dashboard.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [MessageService],
})
export class EditUserComponent implements OnInit {
  public FormSubmitted = false;
  public id!: string;
  public user!: User;
  public editUserForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}
  ngOnInit(): void {
    this.id = this.authService.uid;
    this.refillFom();
  }

  refillFom() {
    this.authService.getUserById(this.id).subscribe((resp: any) => {
      this.editUserForm.reset(resp.user);
    });
  }

  postEditForm() {
    this.FormSubmitted = true;
    if (this.editUserForm.invalid) {
      return;
    }
    this.dashboardService.editUser(this.id, this.editUserForm.value).subscribe({
      next: (resp) => {
        setTimeout(() => {
          this.router.navigateByUrl('/dashboard');
        }, 1500);

        this.messageService.add({
          severity: 'warn',
          summary: 'actualizado',
          detail: 'Usuario actualizado',
          life: 2000,
        });
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
    if (this.editUserForm.get(field)?.invalid && this.FormSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
