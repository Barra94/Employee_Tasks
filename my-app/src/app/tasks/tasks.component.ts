import { Component, OnInit } from '@angular/core';
import { task } from './task.model';
import { TaskService } from '../task.service';
import { DepartmentsService } from '../departments.service';
import { department } from '../departments/department.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskName:string;
  selectedTask : task;

   tasks:task[] =  [];

   onSelectTask(task: task):void
   {
     this.selectedTask = task;
     this._taskservice.onSelectTask(this.selectedTask);
   }

  Change_task_name(name: string)
  {
    
  }
  onCreateTask()
  {
   // this.tasks.push(new task(this.taskName));

     let tas = new task(0,"",[],new Date());
     this.tasks.push(tas);
     this.selectedTask = tas;
  }

  onDelete()
  {
    this.tasks.splice(this.tasks.indexOf(this.selectedTask),1);
    this.selectedTask.name = "";
  }


  constructor(private  _taskservice : TaskService , private departmentService: DepartmentsService) { }

  ngOnInit() {
    this._taskservice.getTasks().subscribe(
      (taskArray) => {this.tasks = taskArray}
    );

    this._taskservice.onSelcetedTaskChanged.subscribe(
      (selectedTaskRecived) => {this.selectedTask = selectedTaskRecived}
    )
  }

  getDepartmentOfTask(task:task):department
  {
    return this.departmentService.getDepartmentById(task.department_id);
  }

}
