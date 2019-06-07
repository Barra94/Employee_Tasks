import { Component, OnInit, EventEmitter } from '@angular/core';
import { department } from './department.model';
import { DepartmentsService } from '../departments.service'
import { flatten } from '@angular/core/src/render3/util';
import { EmployeesService } from '../employees.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departmentName: string;
  departmentBuilding: string;
  selectedDepartment: department;

  //controle the dom
  showUpdate = false;
  showAdd = false;
  
  //list departments
  departments: department[];

  onSelectDepartment(department: department):void
  {
    this.selectedDepartment = department;
    this.departmentService.onSelectDepartment(this.selectedDepartment);
    this.selectedDepartment.employees = this.employeesService.getEmployeeByDepartment(this.selectedDepartment.id)// teacher adds ,it load the departments employees when it's needed
  }

  Change_department_name(name: string)
  {
    
  }

  constructor(private departmentService: DepartmentsService ,private employeesService:EmployeesService) { }



  onDelete() 
  {
    //this.departments.splice(this.departments.indexOf(this.selectedDepartment),1);
    //his.selectedDepartment.name = "";
    this.departmentService.deleteDepartment(this.selectedDepartment);
    this.selectedDepartment = undefined;
  }



  ngOnInit() {
    //this.departmentService.getDepartments().subscribe( departments => this.departments = departments);
    this.departmentService.getDepartments().subscribe(
      (departmentsArray) => {this.departments = departmentsArray}
    );

    this.departmentService.onSelectedDepartmentChange.subscribe(
      (selectedDepartmentRecived) => {this.selectedDepartment = selectedDepartmentRecived}
    );
    
  }

  onUpdateSelected(departmentEl:department)
  {
    this.selectedDepartment = departmentEl;
    this.showUpdate = true;
  }

  onAddClicked()
  {
    this.showAdd= !this.showAdd;
  }

  UpdateCloseClicked()
  {
    this.showUpdate = false;
  }

}
