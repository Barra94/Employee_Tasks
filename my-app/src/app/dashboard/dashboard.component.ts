import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { employee } from '../employees/employee.model';
import { task } from '../tasks/task.model';
import { TaskService } from '../task.service';
import { department } from '../departments/department.model';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private employeeService: EmployeesService , private taskService: TaskService , private departmentService:DepartmentsService) { }

  //contorle the dom
  showDepartment = false;
  showEmployee = false;
  showTask = false;

  getSelectedEmployee():employee
  {
    this.showEmployee = true;
    this.showDepartment = false;
    this.showTask = false;
    return this.employeeService.selectedEmployee;
  }

  getSelectedTask():task
  {
    this.showEmployee = false;
    this.showDepartment = false;
    this.showTask = true;
    return this.taskService.selectedTask;
  }

  getSelectedDepartment():department
  {
    this.showEmployee = false;
    this.showDepartment = true;
    this.showTask = false;
    return this.departmentService.selectedDepartment;
  }

  ngOnInit() {

    this.employeeService.onSelectedEmployeeChanged.subscribe(
      (selectedEmployee: employee) => {this.getSelectedEmployee()}
    );

    this.taskService.onSelcetedTaskChanged.subscribe(
      (selectedTask: task) => {this.getSelectedTask()}
    );

    this.departmentService.onSelectedDepartmentChange.subscribe(
      (selectedDepartment:department) => {this.getSelectedDepartment()}
    );

  }

}
