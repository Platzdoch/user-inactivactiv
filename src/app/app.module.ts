import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InaktiveUserComponent } from './inaktive-user/inaktive-user.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { CounterService } from './counter.Service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,InaktiveUserComponent,ActiveUserComponent],
  bootstrap:    [ AppComponent ],
  providers:    [CounterService]
})
export class AppModule { }
