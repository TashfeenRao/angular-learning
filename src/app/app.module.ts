import { ContentProjectionComponent } from './advanced-component/content-projection/content-projection.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentChildComponent } from './advanced-component/content-child/content-child.component';
import { RememberMeComponent } from './advanced-component/content-projection/remember-me/remember-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentChildComponent,
    ContentProjectionComponent,
    RememberMeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
