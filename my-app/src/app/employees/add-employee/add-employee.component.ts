import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { department } from '../../departments/department.model';
import { EmployeesService } from '../../employees.service';
import { DepartmentsService } from '../../departments.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  department_id:number;
  first_name:string;
  last_name:string;
  birthday:number;

  departments:department[];

  constructor(private employeesServeice:EmployeesService, private departmentService:DepartmentsService)
  {

  }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(
      (departmentsArray) => {this.departments = departmentsArray}
    );
  }

  onAddEmployee()
  {
    let employeeToAdd:employee= new employee(this.department_id,this.first_name,this.last_name,this.birthday);
    this.employeesServeice
    this.employeesServeice.addEmployee(employeeToAdd);
  }



}
