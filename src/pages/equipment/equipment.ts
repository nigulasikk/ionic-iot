import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as echarts from 'echarts'; 

/**
 * Generated class for the EquipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class EquipmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 ionViewDidLoad() {
    console.log('ionViewDidLoad DayWeatherPage');
    const ec = echarts as any;
        var myChart = ec.init(document.getElementById('chart'));
        var optionchart = {
            xAxis: {
                type: 'category',
                data: ['1', '6', '12', '18', '24']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290],
                type: 'line'
            }]
        };

        myChart.setOption(optionchart);

  }
}