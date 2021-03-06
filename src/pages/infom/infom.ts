import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infom',
  templateUrl: 'infom.html',
})
export class InfomPage {

  materia = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.materia=this.navParams.get('materia');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfomPage');
  }

}
