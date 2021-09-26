import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './advanced-components/content-projection/content-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
