import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationManagePage } from './notification-manage';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    NotificationManagePage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationManagePage),ComponentsModule,
  ],
})
export class NotificationManagePageModule {}
