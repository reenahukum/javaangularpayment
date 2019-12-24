import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import  { PaymentDetailComponent} from './components/payment-detail/payment-detail.component'

const routes: Routes = [
  {path: '',  component: HomeComponent  },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'account-detail', component: AccountDetailComponent },
  { path: 'payment-detail', component: PaymentDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
