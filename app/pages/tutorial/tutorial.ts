import {Component,ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {HomePage} from '../home/home'
/*
  Generated class for the TutorialPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html',
})
export class TutorialPage {
  @ViewChild ('2ndSlide') slider: Slides;

  constructor(public nav: NavController) {}

  goToSlide() {
     this.slider.slideNext();
   }

  goToHomePage(){
     this.nav.push(HomePage);
  }

}
