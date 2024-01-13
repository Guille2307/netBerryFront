import { NgModule } from '@angular/core';
import { ImagePipe } from './img.pipe';

@NgModule({
  declarations: [ImagePipe],
  exports: [ImagePipe],
})
export class PipesModule {}
