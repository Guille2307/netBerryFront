import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { TasklistdetailComponent } from './components/tasklistdetail/tasklistdetail.component';
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
    component: TasklistdetailComponent,
  },
  {
    path: 'mytask',
    component: MyTasksComponent,
  },
  {
    path: 'edit/:id',
    component: TasklistdetailComponent,
  },
  {
    path: 'mytask/edit/:id',
    component: TasklistdetailComponent,
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
