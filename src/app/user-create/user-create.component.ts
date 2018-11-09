import { Component, OnInit } from '@angular/core';
import {  AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  userName: string;
  userPassword: string;

  db: AngularFireDatabase;

  ngOnInit() {
  }

  createAccount(){
    console.log(this.userName)
    console.log(this.userPassword)
    this.db.list('users').push({name:this.userName,password:this.userPassword})
  }

}
