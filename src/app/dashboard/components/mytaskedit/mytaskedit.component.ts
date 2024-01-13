import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mytaskedit',
  templateUrl: './mytaskedit.component.html',
  styleUrls: ['./mytaskedit.component.scss'],
})
export class MytaskeditComponent implements OnInit {
  public id!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((resp) => {
      this.id = resp['id'];
    });
  }
}
