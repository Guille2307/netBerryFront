import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { HiUserComponent } from './components/hi-user/hi-user.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';

@NgModule({
  declarations: [DashboardComponent, HiUserComponent, TasklistComponent],
  imports: [CommonModule, DashboardRoutingModule, PrimeNgModule, SharedModule],
})
export class DashboardModule {}
