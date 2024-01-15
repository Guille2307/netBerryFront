import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  providers: [MessageService],
})
export class TagsComponent {
  public FormSubmitted = false;

  public tagForm = this.fb.group({
    name: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private messageService: MessageService
  ) {}

  newTag() {
    this.FormSubmitted = true;
    if (this.tagForm.invalid) {
      return;
    }
    this.dashboardService.newTag(this.tagForm.value).subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Tag creado Correctamente',
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

  validField(field: string) {
    if (this.tagForm.get(field)?.invalid && this.FormSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
