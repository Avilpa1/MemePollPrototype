import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UiProvider } from '../../providers/ui/ui'

/**
 * Generated class for the PollInterfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poll-interface',
  templateUrl: 'poll-interface.html',
})
export class PollInterfacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public UiProvider: UiProvider) {
  }

  ionViewDidLoad() {
    this.UiProvider.enableUI = false
    console.log('ionViewDidLoad PollInterfacePage', this.UiProvider.enableUI);
  }

}
