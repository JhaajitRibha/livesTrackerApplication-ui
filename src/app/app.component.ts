import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component"
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lives-tracker-ui';
  users = DUMMY_USERS

  // nameforTask:String='please select the user';
  nameforTask?:String;

  onSelectUser(id:String){
    console.log('user selected with id ' + id);
    let foundUser = this.users.find(user=>user.id===id);
    this.nameforTask = foundUser?foundUser.name:" ";
  }

}
