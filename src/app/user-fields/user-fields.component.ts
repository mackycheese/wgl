import { Component, OnInit } from '@angular/core';
import { WGLUser } from '../../wgl_users';

@Component({
  selector: 'app-user-fields',
  templateUrl: './user-fields.component.html',
  styleUrls: ['./user-fields.component.css']
})
export class UserFieldsComponent implements OnInit {


  public user: WGLUser;

  constructor() {
    this.user=new WGLUser()
    this.user.name=""
    this.user.password=""
  }

  ngOnInit() {
  }

}
