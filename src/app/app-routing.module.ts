import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsViewerComponent } from './teams-viewer/teams-viewer.component';


const routes: Routes = [
  {
    path: 'teams', component: TeamsViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
