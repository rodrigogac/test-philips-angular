import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagensModule } from '../shared/images/imagens.module';
import { GamesModule } from '../games/games.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ImagensModule,
    GamesModule
  ]
})
export class HomeModule { }
