import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { employee } from '../employee.model';
import { EmployeesService } from '../../employees.service';
import { DepartmentsService } from '../../departments.service';
import { department } from '../../departments/department.model';

@Component({
  selector: 'app-mployee-update',
  templateUrl: './mployee-update.component.html',
  styleUrls: ['./mployee-update.component.css']
})
export class MployeeUpdateComponent implements OnInit {

  @Input() selectedEmployee:employee;

  departments:department[];

  constructor(private employeesServeice:EmployeesService, private departmentService:DepartmentsService)
  {
    
  }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(
      (departmentsArray) => {this.departments = departmentsArray}
    );
  }
  
  OnUpdateEmployee()
  {
    this.employeesServeice.updateEmployee(this.selectedEmployee).subscribe();
  }



}
