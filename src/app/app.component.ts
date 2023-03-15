import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { UserService } from './user/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'example';

  constructor(private themeService: ThemeService, private userService:UserService) {}


  ngOnInit(){
    this.userService.checkAuthenticationStatus();
  }

  selectedState: any = null;

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  cities1: any[] = [];
  
  cities2: any[] = [];
  
  city1:any = null;

  city2:any = null;

  changeTheme(theme: string) {
      this.themeService.switchTheme(theme);
  }
}
