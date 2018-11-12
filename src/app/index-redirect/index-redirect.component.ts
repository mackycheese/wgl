import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-redirect',
  templateUrl: './index-redirect.component.html',
  styleUrls: ['./index-redirect.component.css']
})
export class IndexRedirectComponent implements OnInit {

  constructor(router:Router) {
    router.navigate(['home'])
  }

  ngOnInit() {
  }

}
