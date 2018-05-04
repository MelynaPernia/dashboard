import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ToDoComponent } from './to-do/to-do.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToDoComponent,
    NavVerticalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
