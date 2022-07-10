import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaneDirective } from './directives/pane.directive';
import { ViewChildComponent } from './components/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    PaneDirective,
    ViewChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
