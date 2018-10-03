import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComfortHumidityPage } from './comfort-humidity';

@NgModule({
  declarations: [
    ComfortHumidityPage,
  ],
  imports: [
    IonicPageModule.forChild(ComfortHumidityPage),
  ],
})
export class ComfortHumidityPageModule {}
