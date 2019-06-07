import { Component, OnInit, Input } from '@angular/core';
import { task } from '../task.model';
import { DepartmentsService } from '../../departments.service';
import { department } from '../../departments/department.model';
import { employee } from '../../employees/employee.model';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() selectedTask:task;

  constructor(private departmentService:DepartmentsService, private employeeService:EmployeesService) 
  { 

  }

  getDepartmentOfTask(task:task):department
  {
    return this.departmentService.getDepartmentById(task.department_id);
  }

  getEmployeeById(id:number):employee
  {
    return this.employeeService.getEmployeeById(id);
  }

  ngOnInit() {
  }

}
