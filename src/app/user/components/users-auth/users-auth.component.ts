import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/core/dialog/dialog.component';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-users-auth',
  templateUrl: './users-auth.component.html',
  styleUrls: ['./users-auth.component.scss'],
})
export class UsersAuthComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService, //auth| not user
    private router: Router,
    private messageService: MessageService /*     private dialog: DialogComponent */
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  login() {
    const user: User = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    let isLogin: boolean = false;
    this.userService.login(user).then((response: any) => {
      if (!response) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `usuario y/o contraseña incorrecto`,
        });
        isLogin = false;
        localStorage.clear();
      } else {
        localStorage.setItem('accessToken', response.accessToken);
        isLogin = true;

        this.messageService.add({
          severity: 'success',
          summary: 'hackeado',
          detail: `contraseña: ${this.form.value.password}`,
        });
        const id :number = 20;
        this.router.navigate([`/webside/choferes`]);
      }
    });
    /*       .catch((error) => {
   


      }); */
    /*     console.log(isLogin);
    if (isLogin) {
    } else {
    } */
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get usernameField() {
    return this.form.get('username');
  }

  get passwordField() {
    return this.form.get('password');
  }
}
