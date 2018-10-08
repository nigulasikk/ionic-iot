import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action',
  templateUrl: 'action.html',
})
export class ActionPage {
  city : string= '1';
  filter : string= 'ps';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPage');
  }
  getItems(e){
    console.log(e);
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
