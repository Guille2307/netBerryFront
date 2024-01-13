import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  exports: [
    ButtonModule,
    DialogModule,
    PasswordModule,
    ToastModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    DataViewModule,
    TagModule,
    RatingModule,
    ConfirmPopupModule,
    InputTextareaModule,
    DropdownModule,
  ],
})
export class PrimeNgModule {}
