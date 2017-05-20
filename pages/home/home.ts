import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {NextPage} from '../next/next';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
nextPage=NextPage;
public tap: number=0;
  constructor(public navCtrl: NavController, public toastCtrl:ToastController) {

  }
showToast(){
	let toast =this.toastCtrl.create({
		message:'Better Toast',
	showCloseButton: true,
	closeButtonText:'ok',
	position:'top'});
	toast.present(toast);
}
tapEvent(e){
	this.tap++  
  }
}
