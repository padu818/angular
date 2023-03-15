import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { DriverFormNewComponent } from './components/driver-form-new/driver-form-new.component';
import { DriverFormEditComponent } from './components/driver-form-edit/driver-form-edit.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';

const routes: Routes = [
  {
    path: '',
    component: DriverListComponent,
  },
  {
    path: 'new',
    component: DriverFormNewComponent,
  },
  { path: 'edit/:id', component: DriverFormEditComponent },
  {
    path: ':id',
    component: DriverDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversRoutingModule {}
