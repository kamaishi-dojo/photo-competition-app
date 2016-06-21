import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {TutorialPage} from '../tutorial/tutorial'

/*
  Generated class for the LaunchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/launch/launch.html',
})
export class LaunchPage {
  constructor(public nav: NavController) {
   setTimeout(() => {this.nav.push(TutorialPage)},3000);

  }
}
