import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GameListsComponent } from './game-lists/game-lists.component';
import { GamePhaseComponent } from './game-phase/game-phase.component';
import { GameRankingComponent } from './game-ranking/game-ranking.component';




@NgModule({
  declarations: [
    GameListsComponent, 
    GamePhaseComponent, 
    GameRankingComponent],
  
  exports:[
    GameListsComponent],
  
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class GamesModule { }
