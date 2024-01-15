import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { TasklistdetailComponent } from './components/tasklistdetail/tasklistdetail.component';
import { MytaskeditComponent } from './components/mytaskedit/mytaskedit.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TagsComponent } from './components/tags/tags.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: TasklistComponent,
  },
  { path: 'edituser', component: EditUserComponent },
  {
    path: 'newtask',
    component: NewTaskComponent,
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
  {
    path: 'tags',
    component: TagsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
