import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AuthService } from './auth.service';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  user: any = null;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.user = this.authService.getUserInfo()      
    if(this.user==null)
      this.authService.user$.subscribe((data) => {
        this.user = data;
      });   
  }
  logOut() {
    this.authService.logout();
    this.user=null
  }
}
