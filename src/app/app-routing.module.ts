import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { UserCreateComponent } from './user-create/user-create.component'
import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexRedirectComponent } from './index-redirect/index-redirect.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:'',
    component:IndexRedirectComponent,
    pathMatch:'full'
  },
  {
    path:'logout',
    component:LogoutComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomePageComponent,
    pathMatch:'full'
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  },
  {
    path:'createuser',
    component:UserCreateComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:UserLoginComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
