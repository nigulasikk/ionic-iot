import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the DayColumnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'day-column',
  templateUrl: 'day-column.html'
})
export class DayColumnComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello DayColumnComponent Component');
    this.text = 'Hello World';
  }
  viewWeatherDayDetail(){
    this.navCtrl.push('DayWeatherPage', {});
  }

}
