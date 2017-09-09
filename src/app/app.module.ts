import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { ImportComponent }   from './import-cards.component';
import { ViewComponent }  from './view-cards.component';


import { AppRoutingModule }     from './app-routing.module';
import { CardService } from './card.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ImportComponent,
    ViewComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ CardService ]
})
export class AppModule { }
