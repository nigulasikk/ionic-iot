import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the IotTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iot-tab',
  templateUrl: 'iot-tab.html'
})
export class IotTabPage {

  weatherRoot = 'WeatherPage'
  comfortRoot = 'ComfortPage'
  equipmentRoot = 'EquipmentPage'


  constructor(public navCtrl: NavController) {}

}
