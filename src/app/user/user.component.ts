// import { Component ,computed,signal} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

import { Component, EventEmitter ,Output} from "@angular/core";
import { Input } from "@angular/core";

type User = {
  id:string,
  avatar:string,
  name:string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  // @Input({required:true}) id!:String
  // @Input({required:true}) avatar!:String
  // @Input({required:true}) name!:String
  // @Input({required:true}) user!:{
  //   id:string,
  //   avatar:string,
  //   name:string
  // }  

  @Input({required:true}) user!:User

  @Output() select = new EventEmitter()
  // randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
  // selectedUser = DUMMY_USERS[randomIndex]
  // // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // // imagePath = computed(()=>'assets/'+this.selectedUser().avatar)
  // get imagePath(){
  //   return 'assets/'+this.selectedUser.avatar;
  // }

  // buttonClicked(){
  //   this.selectedUser=DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)]
  //   // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //   console.log('button clicked-samar')
  // }

  get imagePath(){
    return 'assets/'+this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id)
  }
}
