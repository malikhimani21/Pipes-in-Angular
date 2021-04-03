import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReversePipePipe } from './reverse-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    HomeComponent,
    PipesComponent,
    ReversePipePipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
