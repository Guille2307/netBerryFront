import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user!: User;

  constructor(private http: HttpClient, private router: Router) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid(): string {
    return this.user.uid || '';
  }

  createUser(formData: any) {
    return this.http.post(`${base_url}/users`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  login(formData: any) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  checkAutentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);
    return this.http.get(`${base_url}/login/renew`).pipe(
      tap((user: any) => localStorage.setItem('token', user.token)),
      tap((user) => (this.user = user.user)),
      map((user) => {
        const { name, email, password, task, img, uid } = user.user;
        this.user = new User(name, email, password, task, img, uid);
        localStorage.setItem('token', user.token);
        return true;
      }),
      map((user) => !!user),
      catchError((err) => of(false))
    );
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
