import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { WGLUser } from 'src/wgl_user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public db:AngularFireDatabase,public userService:UserService) {}

  ngOnInit() {
  }

  showUserInfo(){
    var currentAccountKey=localStorage.getItem('currentAccountKey')
    this.userService.findByKey(currentAccountKey,(user:WGLUser)=>{
      alert("Username: "+user.name+"\nPassword: "+user.password)
    })
  }

}
