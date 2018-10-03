import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationManagePage } from './notification-manage';

@NgModule({
  declarations: [
    NotificationManagePage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationManagePage),
  ],
})
export class NotificationManagePageModule {}
