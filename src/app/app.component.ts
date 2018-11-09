import { Component } from '@angular/core';
import {  AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wgl';
  constructor(db: AngularFireDatabase){
    // console.log(db)
    const ref=db.list('users')
  }
}
