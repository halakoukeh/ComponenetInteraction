import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TemplateClassCommModule} from './template-class-comm/template-class-comm.module';
import { ChildComponent } from './parent-child/child/child.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    TemplateClassCommModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
