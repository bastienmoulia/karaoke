import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
