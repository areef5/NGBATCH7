import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { formComponent } from './form/form.component';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent,
    formComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule, FormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
