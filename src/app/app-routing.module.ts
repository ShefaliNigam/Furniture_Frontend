import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: "login", component: LoginformComponent},
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "profile", component: ProfileComponent},
  {path: "products", component: ProductsListComponent},
  {path: "cart", component: CartComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
