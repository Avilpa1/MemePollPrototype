import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { UiProvider } from '../../providers/ui/ui';
import { SplashPage } from '../splash/splash';
import { PollInterfacePage } from '../poll-interface/poll-interface';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  slideOpts = {
    effect: 'flip',
    autoHeight: true
  };

  array:any = [1,2,3,4,5,6,7,8,9,10]

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public uiProvider: UiProvider) {
  }

  ionViewWillLoad() {
    this.uiProvider.enableUI = true
    console.log(this.uiProvider.enableUI);

  }

  toCategories() {
    this.navCtrl.setRoot(CategoriesPage, {}, { animate: true, duration: 300 })
  }

  toDashboard() {
    this.navCtrl.setRoot(DashboardPage, {}, { animate: true, duration: 300 })
  }

  toPoll() {
    this.navCtrl.push(PollInterfacePage, {}, { animate: true, duration: 300 })
  }


}
