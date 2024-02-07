import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Task } from '../../interfaces/userByIdResponse.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit, OnDestroy {
  public tasks!: Task[];
  public uid!: string;
  public count!: number;
  public getAllTasksSucription?: Subscription;
  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  ngOnDestroy(): void {
    this.getAllTasksSucription?.unsubscribe();
  }

  ngOnInit() {
    this.uid = this.authService.uid;
    this.getAllTasksSucription = this.dashboardService
      .getAllTasks(this.uid)
      .subscribe((resp: any) => {
        this.tasks = resp.tasks;
        this.count = resp.tasks.length;
      });
  }
}
