import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EquipmentPhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipment-photo',
  templateUrl: 'equipment-photo.html',
})
export class EquipmentPhotoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentPhotoPage');
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
  goBack() {
    this.navCtrl.pop();
  }
}
