import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  city : string= '1';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }
  viewClimateDayDetail(){
    this.navCtrl.push('DayClimatePage', {
    });
  }
  viewWeatherDayDetail(){
     this.navCtrl.push('DayWeatherPage', {
    });
  }
}
