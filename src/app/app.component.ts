import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PollResultPage } from '../pages/poll-result/poll-result';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = SplashPage;
  rootPage: any = PollResultPage;

  pages: Array<{title: string, component: any}>;
  userOptions: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Sports', component: HomePage },
    //   { title: 'Health', component: SplashPage },
    //   { title: 'Food', component: HomePage },
    //   { title: 'Politics', component: SplashPage },
    //   { title: 'Art', component: HomePage },
    //   { title: 'Movies', component: SplashPage },
    //   { title: 'TV', component: HomePage },
    //   { title: 'Music', component: SplashPage },
    //   { title: 'Games', component: HomePage },
    //   { title: 'Horror', component: SplashPage },
    //   { title: 'Technology', component: HomePage },
    //   { title: 'Kids', component: SplashPage },
    //   { title: 'Random', component: HomePage },
    //   { title: 'All Polls', component: SplashPage }
    // ];

    this.userOptions = [
      { title: 'Profile', component: HomePage },
      { title: 'History', component: SplashPage },
      { title: 'Rewards', component: HomePage },
      { title: 'Logout', component: SplashPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
