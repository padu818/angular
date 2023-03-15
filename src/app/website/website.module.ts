import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { DriverListComponent } from './drivers/components/driver-list/driver-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ButtonModule
  ]
})
export class WebsiteModule { }
