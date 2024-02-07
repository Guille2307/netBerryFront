import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Task } from '../../interfaces/userByIdResponse.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit, OnDestroy {
  public tasks!: Task[];
  public visible: boolean = false;
  public count!: number;
  public getAllTasksSucrition?: Subscription;
  showDialog() {
    this.visible = true;
  }

  constructor(private dashboardService: DashboardService) {}

  ngOnDestroy(): void {
    this.getAllTasksSucrition?.unsubscribe();
  }

  ngOnInit() {
    this.getAllTasksSucrition = this.dashboardService
      .getAllTasks()
      .subscribe((resp: any) => {
        this.tasks = resp.tasks;
        this.count = this.tasks.length;
      });
  }
}
