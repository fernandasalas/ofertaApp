import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'
import { InforPage } from '../pages/infor/infor';
import { InfomPage } from '../pages/infom/infom';
import { BuscarmatePage } from '../pages/buscarmate/buscarmate';
import { BuscarprofePage } from '../pages/buscarprofe/buscarprofe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InforPage,
    InfomPage,
    BuscarmatePage,
    BuscarprofePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InforPage,
    InfomPage,
    BuscarmatePage,
    BuscarprofePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
