import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,

    private authService: AuthService
  ) {}

  public uid = this.authService.uid;

  public desde = 0;

  getAllTasks(assignedTo?: string): Observable<Object> {
    if (assignedTo) {
      return this.http.get(`${base_url}/tasks?&assignedTo=${assignedTo}`);
    }
    return this.http.get(`${base_url}/tasks`);
  }

  getUserTaskById(uid: string) {
    return this.http.get(`${base_url}/users/${uid}`);
  }
  getTaskById(id: string) {
    return this.http.get(`${base_url}/tasks/${id}`);
  }

  updateTaskById(id: string, formData: any) {
    return this.http.patch(`${base_url}/tasks/${id}`, formData);
  }
  deleteTask(id: string) {
    return this.http.delete(`${base_url}/tasks/${id}`);
  }
  getAllTags() {
    return this.http.get(`${base_url}/tags`);
  }

  createTask(formData: any) {
    return this.http.post(`${base_url}/tasks`, formData);
  }
}
