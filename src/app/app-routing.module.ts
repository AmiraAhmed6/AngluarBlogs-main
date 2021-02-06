import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { GetOneBlogComponent } from './components/get-one-blog/get-one-blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {path:"blog/get/:id",component:GetOneBlogComponent},
  {path:"blog/add",component:AddBlogComponent},
  {path:"user/profile",component:ProfileComponent},
  {path:"user/view-user/:id",component:ViewUserComponent},
  {path:"user/register",component:RegisterComponent},
  {path:"user/home",component:HomeComponent},
  {path:"user/login",component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
