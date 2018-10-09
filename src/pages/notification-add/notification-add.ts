import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-add',
  templateUrl: 'notification-add.html',
})
export class NotificationAddPage {
  city : string= '1';
  tenant : string= '1';
  bigOrSmall : string= '1';
  bigOrSmall2 : string= '1';
  detailValue : string= '10';
  detailValue2 : string= '10';
  conditionField : string= 'temperature';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationAddPage');
  }

}
