import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'hi-user',
  templateUrl: './hi-user.component.html',
  styleUrls: ['./hi-user.component.scss'],
})
export class HiUserComponent implements OnInit {
  public user: User = this.authService.user;
  public imgUrl = '';
  constructor(public authService: AuthService) {
    this.imgUrl = this.authService.user.imageUrl;
    console.log(this.imgUrl);
  }

  ngOnInit(): void {}

  public visible: boolean = false;
}
