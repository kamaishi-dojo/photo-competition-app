import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {TutorialPage} from '../tutorial-page/tutorial-page';

@Component({
  templateUrl: 'build/pages/launch-page/launch-page.html',
})
export class LaunchPage {

  constructor(public nav: NavController) {
   setTimeout(() => {this.nav.push(TutorialPage)},3000);
  }

}
