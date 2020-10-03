import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsViewerComponent } from './teams-viewer/teams-viewer.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { services } from './store/services';
import { HeaderComponent } from './layout/header/header.component';
import { LeftSidenavComponent } from './layout/left-sidenav/left-sidenav.component';
@NgModule({
  declarations: [AppComponent, TeamsViewerComponent, HeaderComponent, LeftSidenavComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  providers: [...services],
  bootstrap: [AppComponent],
})
export class AppModule {}
