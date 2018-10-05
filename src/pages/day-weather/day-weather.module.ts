import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayWeatherPage } from './day-weather';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    DayWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(DayWeatherPage),ComponentsModule,
  ],
})
export class DayWeatherPageModule {}
