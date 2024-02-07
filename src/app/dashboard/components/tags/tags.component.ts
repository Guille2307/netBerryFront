import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DashboardService } from '../../services/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  providers: [MessageService],
})
export class TagsComponent implements OnDestroy {
  public FormSubmitted = false;
  public newTagSuscription?: Subscription;
  public tagForm = this.fb.group({
    name: ['#', [Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dashboardService: DashboardService,
    private messageService: MessageService
  ) {}

  ngOnDestroy(): void {
    this.newTagSuscription?.unsubscribe();
  }

  newTag() {
    this.FormSubmitted = true;
    if (this.tagForm.invalid) {
      return;
    }
    this.newTagSuscription = this.dashboardService
      .newTag(this.tagForm.value)
      .subscribe({
        next: (resp) => {
          this.messageService.add({
            severity: 'warn',
            summary: 'Successful',
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
}
