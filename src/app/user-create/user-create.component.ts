import { Component, OnInit, ViewChild } from '@angular/core';
import {  AngularFireDatabase } from '@angular/fire/database'
import { UserFieldsComponent } from '../user-fields/user-fields.component';
import { WGLUser } from 'src/wgl_user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(public db: AngularFireDatabase,public userService:UserService) {
  }

  @ViewChild("userFields") userFields: UserFieldsComponent;

  ngOnInit() {
  }

  createAccount(){
    console.log(this.userFields)
    console.log(this.userFields.user.name)
    console.log(this.userFields.user.password)
    var u=new WGLUser();
    u.name=this.userFields.user.name;
    u.password=this.userFields.user.password;
    this.userService.addUser(u)
  }

}
