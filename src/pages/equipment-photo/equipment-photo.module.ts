import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipmentPhotoPage } from './equipment-photo';

@NgModule({
  declarations: [
    EquipmentPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipmentPhotoPage),
  ],
})
export class EquipmentPhotoPageModule {}
