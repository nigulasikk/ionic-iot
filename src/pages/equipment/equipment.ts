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
   legendShow : boolean = false;
  city : string= '1';
  datetime : string= '2018-10-18';

  sensors : any[] = [
    {isEdit:false,value:'Sensor 1',isChecked:true,clolr:"blue"},
    {isEdit:false,value:'Sensor 2',isChecked:false,clolr:"white"},
    {isEdit:false,value:'Sensor 3',isChecked:true,clolr:"orange"},
    {isEdit:false,value:'Sensor 4',isChecked:true,clolr:"orange"},
    {isEdit:false,value:'Sensor 5',isChecked:true,clolr:"orange"},
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
              data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
              axisLine: {
                  lineStyle: {
                      color: 'rgb(171,171,171)'
                  }
              },
              splitLine: {
                  show: false
              }
          },
          yAxis: {
              type: 'value',
              axisLine: {
                  lineStyle: {
                      color: 'rgb(171,171,171)'
                  }
              }
          },
           tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                  params = params[0];
                  return params.value[1];
              },
              axisPointer: {
                  animation: false
              }
          },
          legend: {
              textStyle:{
                color: 'rgb(171,171,171)'
              },
              left: 'right',
              bottom:'bottom',
              data: ['sensors 1', 'sensors 2','sensors 3']
          },
          color:['rgb(213,213,213)','rgb(90,143,220)', 'rgb(219,117,65)', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
          series: [{
              name:'Power',
              data: [26, 21, 24, 26,22, 18, 24, 26,22, 21, 12, 26,22, 21, 29, 33,22, 21, 24, 26,22, 21, 24, 26],
              type: 'line'
          },
          {
              name:'Chill 1',
              data: [11, 11, 14, 26,22, 16, 24, 26,32, 11, 14, 26,31, 11, 24, 36,24, 21, 24, 26,22, 21, 24, 26],
              type: 'line'
          },
          {
              name:'Fan 1',
              data: [0, 9, 9, 0,0, 8, 8, 0,0, 11, 11, 0,0, 12, 12, 0,0, 12, 12, 0,0, 0, 2, 4],
              type: 'line'
          }
          ]
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
    this.navCtrl.push('EquipmentPhotoPage', {});
  }
}
