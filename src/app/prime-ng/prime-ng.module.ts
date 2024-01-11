import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
@NgModule({
  exports: [
    ButtonModule,
    DialogModule,
    PasswordModule,
    ToastModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
  ],
})
export class PrimeNgModule {}
