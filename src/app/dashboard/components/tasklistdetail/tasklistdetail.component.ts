import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Tag, Task } from '../../interfaces/userByIdResponse.interface';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-tasklistdetail',
  templateUrl: './tasklistdetail.component.html',
  styleUrls: ['./tasklistdetail.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class TasklistdetailComponent implements OnInit {
  public id!: string;
  public FormSubmitted = false;
  public statusOption: any[] | undefined;
  public selectedStatus: any | undefined;
  public users: User[] = [];
  public task: Task[] = [];
  public tags: Tag[] = [];
  public editTaskForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    status: [],
    assignedTo: [],
    tags: [],
  });

  get currentTask(): Task {
    const task = this.editTaskForm.value as Task;
    return task;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
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
    this.activatedRoute.params.subscribe((resp) => {
      this.id = resp['id'];
    });

    this.authService.getUser().subscribe((resp: any) => {
      this.users = resp.users;
    });

    this.dashboardService.getAllTags().subscribe((tags: any) => {
      this.tags = tags.tags;
    });
    this.refillForm();
  }

  refillForm() {
    this.dashboardService.getTaskById(this.id).subscribe((resp: any) => {
      this.editTaskForm.reset(resp.task);
    });
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Quieres borrar esta tarea?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        this.dashboardService.deleteTask(this.id).subscribe(() => {});
        this.messageService.add({
          severity: 'warn',
          summary: 'Confirmed',
          detail: 'Tarea Borrada',
          life: 3000,
        });
        setTimeout(() => {
          this.router.navigateByUrl('/dashboard');
        }, 1500);
      },
      reject: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Cancelado',
          detail: 'Actualización cancelada',
          life: 3000,
        });
      },
    });
  }

  postAndConfirmation() {
    console.log('aqui');
    this.FormSubmitted = true;
    if (this.editTaskForm.invalid) {
      return;
    }

    this.dashboardService.updateTaskById(this.id, this.currentTask).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Success',
          detail: 'Tarea editada con éxito',
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
    if (this.editTaskForm.get(field)?.invalid && this.FormSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
