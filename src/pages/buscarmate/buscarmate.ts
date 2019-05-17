import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfomPage } from '../infom/infom';

/**
 * Generated class for the BuscarmatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscarmate',
  templateUrl: 'buscarmate.html',

})
export class BuscarmatePage {
  lista = [];
  oferta = [];

  infomPage = InfomPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = this.navParams.get('oferta');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarmatePage');
  }
  getItems(ev: any) {
    console.log(ev.target.value);
     let materia = ev.target.value.toLowerCase();

     this.oferta = this.lista.filter(ofertas => {
      return ofertas.Materia.toLowerCase().includes(materia);
    });
    console.log(JSON.stringify(this.oferta));
  }
  infom(materia){
    this.navCtrl.push(this.infomPage, {materia: materia});
  }
  
}
