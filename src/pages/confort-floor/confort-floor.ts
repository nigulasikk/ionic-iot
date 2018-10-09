import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as echarts from 'echarts'; 

/**
 * Generated class for the ConfortFloorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confort-floor',
  templateUrl: 'confort-floor.html',
})
export class ConfortFloorPage {
  legendShow : boolean = false;
  city : string= '1';

  sensors : any[] = [
    {isEdit:false,value:'1',isChecked:true},
    {isEdit:false,value:'2',isChecked:false},
    {isEdit:false,value:'3',isChecked:true},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  toggleLegend() {
    this.legendShow = !this.legendShow;
  }
  inputChange(item,value) {
    console.log(value);
    item.value = value;
  }
  edit(item){
    console.log(item);
    item.isEdit = true;
  }
  save(item){
    item.isEdit = false;
    console.log(this.sensors);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DayWeatherPage');
    const ec = echarts as any;
      var myChart = ec.init(document.getElementById('floor-chart'));
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
  // 跳转到 传感器详情页面
  goToComfortPhoto (){
    this.navCtrl.push('ConfortPhotoPage', {});
  }

}
