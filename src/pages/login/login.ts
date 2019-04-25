import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { LandingPage } from '../landing/landing';
import { DashboardPage } from '../dashboard/dashboard';
import { UiProvider } from '../../providers/ui/ui';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  showLogin:boolean = false

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public uiProvider: UiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.uiProvider.enableUI = false
  }

  toSplash() {
    this.navCtrl.push(SplashPage)
  }

  toDashboard() {
    this.navCtrl.setRoot(DashboardPage)
  }

  backToLanding() {
    this.navCtrl.push(LandingPage)
  }

}
