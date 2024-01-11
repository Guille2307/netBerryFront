import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [FooterComponent, MenubarComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [FooterComponent, MenubarComponent],
})
export class SharedModule {}
