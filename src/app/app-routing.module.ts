import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PurchasesComponent } from './purchases/purchases.component'
import { ScoreComponent } from './score/score.component'
import { CharitiesComponent } from './charities/charities.component'
import { FormComponent } from './form/form.component';
import {DonationIncomeComponent} from './donation-income/donation-income.component'
import {LoginComponent} from './login/login.component'
import { RegisterComponent } from './register/register.component';
const routes: Routes = [{path:'home', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'purchases', component:PurchasesComponent},
{path:'score', component:ScoreComponent},
{path:'charities', component:CharitiesComponent},
{path:'form', component:FormComponent},
{path:'donation', component: DonationIncomeComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
