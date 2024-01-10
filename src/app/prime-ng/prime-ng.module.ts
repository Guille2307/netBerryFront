import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
@NgModule({
  exports: [ButtonModule, DialogModule, PasswordModule],
})
export class PrimeNgModule {}
