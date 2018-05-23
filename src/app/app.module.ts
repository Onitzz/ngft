import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageComponent } from './message/message.component';
import { AstonComponent } from './aston/aston.component';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AstonComponent,
    AppComponent,
    MessageComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
