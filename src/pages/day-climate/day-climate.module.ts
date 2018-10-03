import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayClimatePage } from './day-climate';

@NgModule({
  declarations: [
    DayClimatePage,
  ],
  imports: [
    IonicPageModule.forChild(DayClimatePage),
  ],
})
export class DayClimatePageModule {}
