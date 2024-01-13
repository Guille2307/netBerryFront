import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Task } from '../../interfaces/userByIdResponse.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {
  public task: any[] = [];
  public uid!: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.uid = this.authService.uid;
    this.authService.getUserById(this.uid).subscribe((resp: any) => {
      this.task = resp.user.task;
    });
  }
}
