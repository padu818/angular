import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DriverListComponent } from './website/drivers/components/driver-list/driver-list.component';
import { AuthGuard } from './user/guards/auth.guard';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'webside',
    pathMatch: 'full',
  },  
   {
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },  
  {
    path: 'webside',
    canActivate: [ AuthGuard ],
    loadChildren: () =>
      import('./website/website.module').then((m) => m.WebsiteModule),
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
