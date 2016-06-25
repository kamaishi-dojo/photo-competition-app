import {Component} from '@angular/core';
import {Camera} from 'ionic-native';

@Component({
  selector: 'action-photo-dialog',
  templateUrl: 'build/components/action-photo-dialog/action-photo-dialog.html'
})
export class ActionPhotoDialog {

  public base64Image: string;

  constructor() {
  }

  openCamera() {
      Camera.getPicture({
          destinationType: Camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000
      }).then((imageData) => {
        // imageData is a base64 encoded string
          this.base64Image = "data:image/jpeg;base64," + imageData;
      }, (err) => {
          console.log(err);
      });
    }

}
