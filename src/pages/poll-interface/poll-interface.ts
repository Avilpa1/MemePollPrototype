import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UiProvider } from '../../providers/ui/ui';
import { DashboardPage } from '../dashboard/dashboard';
import { PollResultPage } from '../poll-result/poll-result';

@IonicPage()
@Component({
  selector: 'page-poll-interface',
  templateUrl: 'poll-interface.html',
})
export class PollInterfacePage {

  imgUrl:any
  progress:any = 0
  questionNumber:any = 1
  totalQuestions:any = 10
  pollComplete:boolean = false
  percent:number = 10
  check:number
  mockMemeText:Array<{top: string, bottom: string}>;
  top:string = "Thats My favorite song!"
  bottom: string = "Cool Story, bro!"
  center: string = "Coke or pepsi?"
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public uiProvider: UiProvider) {
    this.mockMemeText = [
      { top: 'Profile', bottom: "HomePage" },
      { top: 'History', bottom: "SplashPage" },
      { top: 'Rewards', bottom: "HomePage" },
      { top: 'Logout', bottom: "LoginPage" },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PollInterfacePage');
    this.uiProvider.enableUI = false
    let random = Math.floor(Math.random() * 500) + 1
    this.imgUrl = "https://picsum.photos/id/" + random + "/360/640"
    // this.pollSetup(30, 0)
  }

  toDashboard() {
    this.navCtrl.pop()
    this.uiProvider.enableUI = true
  }

  pollSetup(totalQuestions, text) {
    this.top = this.mockMemeText[text].top
    this.bottom = this.mockMemeText[text].bottom
    this.totalQuestions = totalQuestions 
    this.percent = 100 / totalQuestions
    // this.check = this.percent * this.totalQuestions
    console.log(this.check)
  }

  randomImg() {
    if (!this.pollComplete) {
      let random = Math.floor(Math.random() * 500) + 1
      this.imgUrl = "https://picsum.photos/id/" + random + "/360/640"
      console.log(this.imgUrl)

      this.progress = this.progress + this.percent
      this.progressBar(this.progress)
    }

  }

  imgCheck() {
    let img = document.querySelector('#img > img')
    console.log(img.clientHeight)
  }

  progressBar(x) {
    if(x <= 100){
      document.getElementById("bar").style.width = "" + x + "%"
      if(this.questionNumber != this.totalQuestions) {
        this.questionNumber = this.questionNumber + 1
      }
      if(x >= 99.5) {
        console.log("Poll Done")
        this.pollComplete = true
      }
    }
  }
}
