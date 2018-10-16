import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ComfortWetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comfort-wet',
  templateUrl: 'comfort-wet.html'
})
export class ComfortWetComponent {

  text: string;

  constructor(public navCtrl: NavController) {
  }
  viewFloor(){
    this.navCtrl.push('ConfortFloorPage', {});
  }

}
