import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Task } from '../../interfaces/userByIdResponse.interface';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent {
  public task: Task[] = [];
  public visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getAllTask().subscribe((resp: any) => {
      this.task = resp.task;
    });
  }
}
