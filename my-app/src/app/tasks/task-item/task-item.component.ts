import { Component, OnInit, Input } from '@angular/core';
import { task } from '../task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task : task;

  constructor(private taskService:TaskService) { }

  onDeleteTask(task:task)
  {
    this.taskService.deleteTask(task);
  }


  ngOnInit() {
  }

}
