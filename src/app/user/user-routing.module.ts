import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersAuthComponent } from './components/users-auth/users-auth.component';
import { DriverListComponent } from '../website/drivers/components/driver-list/driver-list.component';

const routes: Routes = [  {
  path: '',
  component: UsersAuthComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
