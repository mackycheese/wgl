import { Component, OnInit, ViewChild } from '@angular/core';
import { UserFieldsComponent } from '../user-fields/user-fields.component';
import { UserService } from '../user.service';
import { WGLUser } from 'src/wgl_users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public userService:UserService,public router:Router) {}


  @ViewChild("userFieldsLogin") userFields: UserFieldsComponent;

  ngOnInit() {
  }

  login(){
    localStorage.setItem('loggedIn',"true")
    this.userService.iterate(()=>{
      //before
    },(user:WGLUser)=>{
      //per user
      if(user.name==this.userFields.user.name&&user.password==this.userFields.user.password){
        localStorage.setItem('currentAccountKey',user.key)
      }
    },()=>{
      //after
    })
    this.router.navigate([''])
  }

}
