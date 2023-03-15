import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { PrimeNG } from '../primeng/primeng.module';
import { UsersAuthComponent } from './components/users-auth/users-auth.component';
import { DriversModule } from '../website/drivers/drivers.module';
import {ToastModule} from 'primeng/toast';
import { UserRoutingModule } from './user-routing.module';
import {PasswordModule} from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@NgModule({
  declarations: [UsersAuthComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNG,
    ToastModule,
    PasswordModule, 
    InputTextModule,
    
  ],
  providers: [UserService],
})
export class UserModule {}
