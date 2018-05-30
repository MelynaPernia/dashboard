import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ToDoComponent } from './to-do/to-do.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { InputComponent } from './input/input.component';
import { ListTaskComponent } from './list-task/list-task.component';
import {FormsModule} from '@angular/forms';
const appRoutes: Routes = [
  {path: '', component: ToDoComponent},
  {path: 'todo', component: ToDoComponent},
  {path: 'help', component: HelpComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToDoComponent,
    NavVerticalComponent,
    HelpComponent,
    InputComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
