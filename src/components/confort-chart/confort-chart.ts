import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ConfortChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'confort-chart',
  templateUrl: 'confort-chart.html'
})
export class ConfortChartComponent {

  constructor(public navCtrl: NavController) {
  }
  viewFloor(){
    this.navCtrl.push('ConfortFloorPage', {});
  }
}
