import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InforPage } from '../infor/infor';
import { BuscarmatePage } from '../buscarmate/buscarmate';
import { BuscarprofePage } from '../buscarprofe/buscarprofe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  oferta = [];
  inforPage = InforPage;
  buscarmatePage = BuscarmatePage;
  buscarprofePage = BuscarprofePage;


  constructor(public navCtrl: NavController, 
    public http: HttpClient) {
     this.http.get('/v1/api/v1/oferta/')
     .subscribe(data => {
      this.oferta = data;
      console.log(JSON.stringify(this.oferta));
    },error => {
      console.log(JSON.stringify(error));
    });

  }
  
  infor(carrera) {
    console.log('click');
    this.navCtrl.push(this.inforPage,{oferta: this.oferta, carrera: carrera});
  }

  buscarmate(){
    console.log('materia');
    this.navCtrl.push(this.buscarmatePage, {oferta: this.oferta});
  }

  buscarprofe(){
    console.log('profesor');
    this.navCtrl.push(this.buscarprofePage, {oferta: this.oferta});
  }
}