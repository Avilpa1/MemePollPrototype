import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { CategoriesPage } from '../pages/categories/categories';

import { UiProvider } from '../providers/ui/ui';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = SplashPage;
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  userOptions: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public uiProvider: UiProvider,
              ) {

    this.initializeApp();
    this.uiProvider.enableUI = false
    this.userOptions = [
      { title: 'Profile', component: HomePage },
      { title: 'Request', component: HomePage },
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

  toCategories() {
    this.nav.setRoot(CategoriesPage, {}, { animate: true, duration: 300 })
  }

  toDashboard() {
    this.nav.setRoot(DashboardPage, {}, { animate: true, duration: 300 })
  }

  toLoader() {
    this.nav.setRoot(SplashPage, {}, { animate: true, duration: 300 })
  }
}
