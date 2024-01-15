import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Task } from '../../interfaces/userByIdResponse.interface';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit {
  public tasks!: Task[];
  public visible: boolean = false;
  public count!: number;
  showDialog() {
    this.visible = true;
  }

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getAllTasks().subscribe((resp: any) => {
      this.tasks = resp.tasks;
      this.count = this.tasks.length;
    });
  }
}
