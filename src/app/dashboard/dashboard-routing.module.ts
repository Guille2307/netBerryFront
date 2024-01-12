import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { TasklistdetailComponent } from './components/tasklistdetail/tasklistdetail.component';
import { MytaskeditComponent } from './components/mytaskedit/mytaskedit.component';

const routes: Routes = [
  {
    path: '',
    component: TasklistComponent,
  },
  {
    path: 'mytask',
    component: MyTasksComponent,
  },
  {
    path: 'edit/detaildashbord/:id',
    component: TasklistdetailComponent,
  },
  {
    path: 'mytask/edit/mytaskEdit/:id',
    component: MytaskeditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
