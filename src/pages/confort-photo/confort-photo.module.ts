import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfortPhotoPage } from './confort-photo';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    ConfortPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfortPhotoPage),ComponentsModule,
  ],
})
export class ConfortPhotoPageModule {}
