import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipmentPage } from './equipment';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    EquipmentPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipmentPage),ComponentsModule,
  ],
})
export class EquipmentPageModule {}
