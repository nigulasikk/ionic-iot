import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationAddCustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-add-custom',
  templateUrl: 'notification-add-custom.html',
})
export class NotificationAddCustomPage {
  city : string= '1';
  duration : string= '1';
  bigOrSmall : string= '1';
  bigOrSmall2 : string= '1';
  detailValue : string= '10';
  detailValue2 : string= '10';
  conditionField : string= 'temperature';
  conditionField2 : string= 'temperature';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationAddCustomPage');
  }
   // 返回
  goBack() {
    this.navCtrl.pop();
  }
   // 切换tab
  changeTab(tabname){
    if ( tabname === 'comfort') {
      this.navCtrl.push('ComfortPage', {});
    } else  if ( tabname === 'weather'){
      this.navCtrl.push('WeatherPage', {});
    } else  if ( tabname === 'equipment'){
      this.navCtrl.push('EquipmentPage', {});
    }
  }
}
