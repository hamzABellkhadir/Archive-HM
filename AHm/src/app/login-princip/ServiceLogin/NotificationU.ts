import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationUService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 7000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  }


  success(msg) {
    this.config['panelClass'] = ['notification', 'success1'];
    this.snackBar.open(msg, '',this.config);
  }



}
