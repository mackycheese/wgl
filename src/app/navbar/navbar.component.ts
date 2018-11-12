import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from '../user.service';
import { WGLUser } from 'src/wgl_user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit() {
    if(this.isLoggedIn()){
      var key=localStorage.getItem('currentAccountKey')
      this.userService.findByKey(key,(user:WGLUser)=>{
        this.currentAccount=user
      })
    }
  }

  currentAccount: WGLUser;

  isLoggedIn(): boolean {
    if(localStorage.getItem("loggedIn")==null){
      return false
    }
    return <boolean> <any>localStorage.getItem("loggedIn")
  }

}
