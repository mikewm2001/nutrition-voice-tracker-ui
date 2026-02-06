import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>

    <form (ngSubmit)="onSubmit()">
      <label>Email</label><br />
      <input name="email" [(ngModel)]="email" /><br /><br />

      <label>Password</label><br />
      <input name="password" type="password" [(ngModel)]="password" /><br /><br />

      <button type="submit">Login</button>
    </form>

    <p style="color:red" *ngIf="error">{{ error }}</p>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.error = '';
    this.auth.login(this.email, this.password).subscribe({
      next: () => void this.router.navigate(['/']),
      error: () => (this.error = 'Login failed')
    });
  }
}
