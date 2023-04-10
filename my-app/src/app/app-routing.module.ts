import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HersComponent } from './components/hers/hers.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
{path: 'heroes',component: HersComponent },
{path: 'login', component: LoginComponent},
{path:'create', component: CreateUserComponent},
{path:'' ,redirectTo: '/login', pathMatch:'full'},
{path:'**' , component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
