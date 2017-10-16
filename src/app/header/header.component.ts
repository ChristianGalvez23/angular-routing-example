import { Component, OnInit } from '@angular/core';

declare function stick_in_parent(): any;
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('header').stick_in_parent({
      parent: '.container-fluid'
    });
  }

}
