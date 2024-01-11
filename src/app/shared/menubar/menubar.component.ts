import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent {
  constructor(private authService: AuthService) {}
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Tareas',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Nueva tarea',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Mis tareas',
            icon: 'pi pi-fw pi-user-edit',
          },
        ],
      },
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Editar usuario',
            icon: 'pi pi-fw pi-user-plus',
          },
        ],
      },
      {
        label: 'Tags',
        icon: 'pi pi-fw pi-align-justify',
        items: [
          {
            label: 'Listado de tags',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Nuevo tag',
            icon: 'pi pi-fw pi-pencil',
          },
        ],
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.logOut();
        },
      },
    ];
  }

  logOut() {
    this.authService.logOut();
  }
}
