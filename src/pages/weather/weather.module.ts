import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherPage } from './weather';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    WeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(WeatherPage), ComponentsModule
  ],
})
export class WeatherPageModule {}
