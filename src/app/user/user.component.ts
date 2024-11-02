import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {

  randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
  selectedUser = DUMMY_USERS[this.randomIndex];

  get imagePath(){
    return 'assets/'+this.selectedUser.avatar;
  }

  buttonClicked(){
    this.selectedUser=DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)]
    console.log('button clicked-samar')
  }
}
