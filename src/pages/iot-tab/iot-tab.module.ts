import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IotTabPage } from './iot-tab';

@NgModule({
  declarations: [
    IotTabPage,
  ],
  imports: [
    IonicPageModule.forChild(IotTabPage),
  ]
})
export class IotTabPageModule {}
