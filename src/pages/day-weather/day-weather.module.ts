import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayWeatherPage } from './day-weather';

@NgModule({
  declarations: [
    DayWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(DayWeatherPage),
  ],
})
export class DayWeatherPageModule {}
