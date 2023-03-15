import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations:[],
  imports: [
    DialogModule,
    ButtonModule,
    TableModule,
  ],
  exports:[
    DialogModule, ButtonModule
  ]
})

export class PrimeNG {};