import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HaberListComponent } from './haber-list/haber-list.component';
import { LoginGuard } from './login/login.guard';
import { HaberAddComponent } from './haber-add/haber-add.component';

const routes: Routes = [
  {path:'', component:HaberListComponent},
  {path:'login', component:LoginComponent},
  {path:'category/:categoryName', component: HaberListComponent },
  {path:'haber-add', component:HaberAddComponent, canActivate:[LoginGuard]},
  {path:'home', component:HaberListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
