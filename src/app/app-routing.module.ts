import { GameRankingComponent } from './games/game-ranking/game-ranking.component';
import { GamePhaseComponent } from './games/game-phase/game-phase.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { GameListsComponent } from './games/game-lists/game-lists.component';


const routes: Routes = [

  { 
    path: '', 
    component:HomeComponent
 
  },
   { 
    path: 'list', 
    component:GameListsComponent
 
  },
  { 
    path: 'phase', 
    component:GamePhaseComponent
 
  },
  { 
    path: 'ranking', 
    component:GameRankingComponent
 
  },
  { 
    path: '**', 
    component:PageNotFoundComponent
 
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
