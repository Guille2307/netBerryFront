import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  public uid = this.authService.uid;

  public desde = 0;

  getAllTask() {
    return this.http.get(`${base_url}/tasks`);
  }

  getUserTaskById() {
    return this.http.get(`${base_url}/users/${this.uid}`);
  }
  getTaskById(id: string) {
    return this.http.get(`${base_url}/tasks/${id}`);
  }

  upDatetasById(id: string, formData: any) {
    return this.http.patch(`${base_url}/tasks/${id}`, formData);
  }
  deleteTask(id: string) {
    return this.http.delete(`${base_url}/tasks/${id}`);
  }
  getAllTags() {
    return this.http.get(`${base_url}/tags`);
  }
}
