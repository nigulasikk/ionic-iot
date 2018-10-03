import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as echarts from 'echarts'; 

/**
 * Generated class for the DayWeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-day-weather',
  templateUrl: 'day-weather.html',
})
export class DayWeatherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayWeatherPage');
    const ec = echarts as any;
        var myChart = ec.init(document.getElementById('chart'));
        var optionchart = {
            series: {
                type: 'pie',
                data: [{
                    name: 'A', value: 15
                }, {
                    name: 'B', value: 20
                }, {
                    name: 'C', value: 15
                }]
            }
        };
        myChart.setOption(optionchart);

  }

}
