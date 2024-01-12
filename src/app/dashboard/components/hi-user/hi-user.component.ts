import { Component, OnInit } from '@angular/core';
import { RenewTokenResponse } from 'src/app/auth/interfaces/renewToken.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'hi-user',
  templateUrl: './hi-user.component.html',
  styleUrls: ['./hi-user.component.scss'],
})
export class HiUserComponent implements OnInit {
  public user: User = this.authService.user;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  public visible: boolean = false;
}
