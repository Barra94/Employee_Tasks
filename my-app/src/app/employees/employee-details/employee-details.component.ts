import { Component, OnInit, Input } from '@angular/core';
import { employee } from '../employee.model';
import { department } from '../../departments/department.model';
import { DepartmentsService } from '../../departments.service';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() selectedEmployee:employee;

  constructor(private departmentService:DepartmentsService ,private employeeService: EmployeesService) { }

  getDepartmentOfEmployee(employee:employee):department
  {
    return this.departmentService.getDepartmentById(employee.department_id);
  }

  ngOnInit() {

  }

}
