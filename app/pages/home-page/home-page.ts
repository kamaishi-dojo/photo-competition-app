import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ActionPhotoDialog} from '../../components/action-photo-dialog/action-photo-dialog';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {

  constructor(private _navController: NavController) {
  }

  openActionPhotoDialog() {
    var dialog = new ActionPhotoDialog();
    dialog.openCamera();
  }

}
