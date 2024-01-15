import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Task } from '../../interfaces/userByIdResponse.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {
  public tasks!: any[];
  public uid!: string;
  public dimention!: number;
  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.uid = this.authService.uid;
    this.dashboardService.getAllTasks(this.uid).subscribe((resp: any) => {
      this.tasks = resp.tasks;
      this.dimention = resp.tasks.length;
    });
  }
}
