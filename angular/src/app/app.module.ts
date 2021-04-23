import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TxNativeModule } from '@transifex/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TermsComponent,
    HomeComponent,
    PrivacyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    TxNativeModule.forRoot(),
  ],
  providers: [,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
