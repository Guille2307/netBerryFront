import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Task } from '../../interfaces/userByIdResponse.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class NewTaskComponent {
  public FormSubmitted = false;
  public statusOption: any[] | undefined;
  public selectedStatus: any | undefined;
  public users: User[] = [];
  public task: Task[] = [];
  public tags: any[] = [];
  public createTaskForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    status: ['Por asignar'],
    assignedTo: [],
    tags: [],
  });

  get currentTask(): Task {
    const task = this.createTaskForm.value as Task;
    return task;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private dashboardService: DashboardService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.statusOption = [
      { name: 'Por asignar' },
      { name: 'En progreso' },
      { name: 'Finalizada' },
    ];

    this.authService.getUser().subscribe((resp: any) => {
      this.users = resp.users;
    });

    this.dashboardService.getAllTags().subscribe((tags: any) => {
      this.tags = tags.tags;
    });
  }

  postAndConfirmation() {
    this.FormSubmitted = true;
    if (this.createTaskForm.invalid) {
      return;
    }

    this.dashboardService.createTask(this.createTaskForm.value).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Success',
          detail: 'Creada tarea con exito',
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'Error',
          summary: 'Error',
          detail: err.error.message,
          life: 3000,
        });
      },
    });
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
    }, 1500);
  }

  validField(field: string) {
    if (this.createTaskForm.get(field)?.invalid && this.FormSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
