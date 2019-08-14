import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/errors.module';
import { GamesModule } from './games/games.module';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    GamesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
