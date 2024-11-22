import { Component,Input } from '@angular/core';
import { TaskkComponent } from './taskk/taskk.component';
import { dummyTasks } from '../user/dummy_tasks';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskkComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;

  tasks = dummyTasks
  
    get selectedUserTask(){
    return dummyTasks.filter((task)=>task.userId==this.userId);
  
  }

}
