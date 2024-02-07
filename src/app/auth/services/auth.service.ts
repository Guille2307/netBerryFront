import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

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
    return this.user._id || '';
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
        const { name, email, task, _id, img = '' } = user.user;
        this.user = new User(name, email, '', task, img, _id);
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

  getUser() {
    return this.http.get(`${base_url}/users`);
  }
  getUserById(id: string) {
    return this.http.get(`${base_url}/users/${id}`);
  }

  validField(field: string, form: FormGroup, formSubmitted: boolean) {
    return form.get(field)?.invalid && formSubmitted ? true : false;
  }
}
