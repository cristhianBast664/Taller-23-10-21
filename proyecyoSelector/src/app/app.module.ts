import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelctornumericoComponent } from './selctornumerico/selctornumerico.component';

@NgModule({
  declarations: [
    AppComponent,
    SelctornumericoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
