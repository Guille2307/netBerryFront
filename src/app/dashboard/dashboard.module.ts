import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { HiUserComponent } from './components/hi-user/hi-user.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { TasklistdetailComponent } from './components/tasklistdetail/tasklistdetail.component';
import { MytaskeditComponent } from './components/mytaskedit/mytaskedit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HiUserComponent,
    TasklistComponent,
    MyTasksComponent,
    TasklistdetailComponent,
    MytaskeditComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimeNgModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    PipesModule,
  ],
})
export class DashboardModule {}
