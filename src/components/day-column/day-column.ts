import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the DayColumnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 * 动态style规则： height属性 1摄氏度=20px ，margin-top属性 里40度 差的温度/ 最高温度开始计算
 */
@Component({
  selector: 'day-column',
  templateUrl: 'day-column.html'
})
export class DayColumnComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    this.text = 'Hello World';
  }
  viewWeatherDayDetail(){
    this.navCtrl.push('DayWeatherPage', {});
  }

}
