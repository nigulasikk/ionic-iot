import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationAddCustomPage } from './notification-add-custom';

@NgModule({
  declarations: [
    NotificationAddCustomPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationAddCustomPage),
  ],
})
export class NotificationAddCustomPageModule {}
