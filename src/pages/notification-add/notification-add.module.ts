import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationAddPage } from './notification-add';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    NotificationAddPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationAddPage),ComponentsModule,
  ],
})
export class NotificationAddPageModule {}
