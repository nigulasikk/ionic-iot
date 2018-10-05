import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComfortPage } from './comfort';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    ComfortPage,
  ],
  imports: [
    IonicPageModule.forChild(ComfortPage),ComponentsModule,
  ],
})
export class ComfortPageModule {}
