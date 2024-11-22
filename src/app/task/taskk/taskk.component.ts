import { Component, Input } from '@angular/core';
import { dummyTasks } from '../../user/dummy_tasks';

import { taskInterface } from '../../user/user_model';

@Component({
  selector: 'app-taskk',
  standalone: true,
  imports: [],
  templateUrl: './taskk.component.html',
  styleUrl: './taskk.component.css'
})
export class TaskkComponent {

  @Input({required:true}) task!:taskInterface;
  
}
