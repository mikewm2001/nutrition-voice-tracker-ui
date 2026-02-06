import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';

  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    return this.http
      .post<{ accessToken: string }>(`${environment.apiUrl}/auth/register`, {
        email,
        password
      })
      .pipe(tap(res => this.setToken(res.accessToken)));
  }

  login(email: string, password: string) {
    return this.http
      .post<{ accessToken: string }>(`${environment.apiUrl}/auth/login`, {
        email,
        password
      })
      .pipe(tap(res => this.setToken(res.accessToken)));
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}
