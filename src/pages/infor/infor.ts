import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfomPage } from '../infom/infom';

/**
 * Generated class for the InforPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infor',
  templateUrl: 'infor.html',
})
export class InforPage {
  materias = {}
  carrera = "";
  oferta = [];
  infomPage = InfomPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oferta = this.navParams.get('oferta');
    this.carrera = this.navParams.get('carrera');
    this.getItems();

  }

  getItems(){
    this.materias = this.oferta.filter(oferta => {return oferta.Carrera.includes(this.carrera)});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InforPage');
  }
  infom(materia){
     console.log('info');
     this.navCtrl.push(this.infomPage, {materia: materia});
  }

}
