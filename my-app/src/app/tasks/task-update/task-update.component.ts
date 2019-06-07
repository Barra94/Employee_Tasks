import { Component, OnInit, Input } from '@angular/core';
import { task } from '../task.model';
import { TaskService } from 'src/app/task.service';
import { EmployeesService } from '../../employees.service';
import { employee } from '../../employees/employee.model';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  @Input() selectedTask:task;

  constructor(private taskService: TaskService , private employeeService: EmployeesService) { }

  ngOnInit() {
  }

  onUpdateTask()
  {
    this.taskService.updateTask(this.selectedTask).subscribe();
  }

  getEmployeeById(id:number):employee
  {
    return this.employeeService.getEmployeeById(id); 
  }
  

}
