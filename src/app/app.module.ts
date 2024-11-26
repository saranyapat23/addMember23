import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//เพิ่มเอง
import { provideHttpClient } from '@angular/common/http';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { DataapiService } from './dataapi.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,DataapiService,DataapiService,provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
