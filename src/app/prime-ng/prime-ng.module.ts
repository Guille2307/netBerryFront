import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
@NgModule({
  exports: [ButtonModule, DialogModule, PasswordModule, ToastModule],
})
export class PrimeNgModule {}
