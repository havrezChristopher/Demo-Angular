import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { DemosComponent } from './demos/demos.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { Exo02Component } from './exercices/exo02/exo02.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { Exo05Component } from './exercices/exo05/exo05.component';
import { Exo07Component } from './exercices/exo07/exo07.component';
import { Exo08Component } from './exercices/exo08/exo08.component';
import { Exo09Component } from './exercices/exo09/exo09.component';
import { HomeComponent } from './home/home.component';
import { FourofourComponent } from './shared/components/fourofour/fourofour.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'demos', children: [
      { path: '', component: DemosComponent },
      { path: 'demo01', component: Demo01Component },
      { path: 'demo02', component: Demo02Component },
      { path: 'demo03', component: Demo03Component },
      { path: 'demo04', component: Demo04Component },
      { path: 'demo05', component: Demo05Component },
      { path: 'demo06', component: Demo06Component },
      { path: 'demo07', component: Demo07Component },
      { path: 'demo08', component: Demo08Component },
      { path: 'demo09', component: Demo09Component },
      { path: 'demo10', component: Demo10Component },
    ]
  },

  {
    path: 'exercices', children: [
      { path: '', component: ExercicesComponent },
      { path: 'exo01', component: Exo01Component },
      { path: 'exo02', component: Exo02Component },
      { path: 'exo03', component: Exo03Component },
      { path: 'exo05', component: Exo05Component },
      { path: 'exo07', component: Exo07Component },
      { path: 'exo08', component: Exo08Component },
      { path: 'exo09', component: Exo09Component },
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: FourofourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
