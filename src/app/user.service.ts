import { Injectable } from '@angular/core';
import { WGLUser } from '../wgl_users'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db:AngularFireDatabase) { }

  getUsers() {
    return this.db.list('users')
  }

  findByKey(key:string,callback:(user:WGLUser)=>void){
    this.getUsers().snapshotChanges().subscribe(function(action){
      action.forEach(element => {
        if(element.key==key){
          var val=element.payload.val()
          var u=new WGLUser()
          u.name=val.name
          u.password=val.password
          u.key=element.key
          callback(u)
        }
      });
    })
  }

  addUser(u:WGLUser):string{
    return this.getUsers().push({name:u.name,password:u.password}).key
  }

  iterate(before:()=>void,perUser:(user:WGLUser)=>any,after:()=>void){
    this.getUsers().snapshotChanges().subscribe(function(action){
      before()
      var shouldExit=false
      action.forEach(element => {
        if(shouldExit)return
        var u=new WGLUser()
        u.key=element.key
        var val=element.payload.val()
        u.name=val.name
        u.password=val.password
        var res=perUser(u)
        if(res=='exit')shouldExit=true
      });
      after()
    })
  }

}
