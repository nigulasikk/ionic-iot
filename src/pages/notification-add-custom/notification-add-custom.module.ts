import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationAddCustomPage } from './notification-add-custom';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    NotificationAddCustomPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationAddCustomPage),ComponentsModule,
  ],
})
export class NotificationAddCustomPageModule {}
