import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  register() {
    // Gọi phương thức register từ AuthService
    this.authService.register(this.email, this.password);
  }
}
