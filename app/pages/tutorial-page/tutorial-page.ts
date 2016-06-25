import {Component,ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Slides} from 'ionic-angular';

import {HomePage} from '../home-page/home-page'

@Component({
  templateUrl: 'build/pages/tutorial-page/tutorial-page.html',
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
