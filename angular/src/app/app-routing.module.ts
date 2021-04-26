import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: TermsComponent,
    path: 'terms',
  },
  {
    component: PrivacyComponent,
    path: 'privacy',
  },
  {
    component: HomeComponent,
    path: 'home',
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
