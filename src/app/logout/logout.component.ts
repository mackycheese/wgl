import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public userService:UserService,public router:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('loggedIn',null)
    localStorage.setItem('currentAccountKey',null)
    this.router.navigate([''])
  }

}
