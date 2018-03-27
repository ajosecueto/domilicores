import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MobileComponent} from './mobile/mobile.component';
import {GeneralService} from './general/general.service';
import {LoginComponent} from './login/login.component';
import {YesnoComponent} from './utils/yesno/yesno.component';
import {EmailMenuComponent} from './utils/email-menu/email-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    YesnoComponent,
    EmailMenuComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [GeneralService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
