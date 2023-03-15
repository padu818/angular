import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from '../user/guards/auth.guard';

const routes: Routes = [{
  path: '',
    component:LayoutComponent ,
    children: [
      {
        path: 'choferes',
         canActivate: [ AuthGuard ], 
        loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversModule)
      },]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
