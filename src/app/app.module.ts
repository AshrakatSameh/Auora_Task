import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeaderComponent } from './shared/header/header.component';
import { InformationComponent } from './components/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
