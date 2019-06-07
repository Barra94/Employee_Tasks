import { Component, OnInit,Output } from '@angular/core';
import { employee } from './employee.model';
import { EmployeesService } from '../employees.service';
import { DepartmentsService } from '../departments.service';
import { department } from '../departments/department.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

 //employeeFirstName:string;//
 //employeeLastName:string;//
 //employeeDepartment:number;//
 //employeeBirthdate: number;//

  selectedEmployee : employee;

  employees: employee[];


  selectedDepartment: department = null;

  //controle the dom
  showAdd=false;
  showUpdate=false;

  onSelectEmployee(employee: employee):void
  {
    this.selectedEmployee = employee;
    this.selectedEmployee.tasks = this.taskService.getTAsksbyEmployee(this.selectedEmployee);//store the tasks of that emplyee
    this.employeesServeice.onSelectEmployee(employee); // to send the employee to the serive , to let the other componet subscripe to that event.
  }

  getlistOfEmployees():employee[]
  {
    if(this.selectedDepartment !== null || this.selectedDepartment===undefined )
    {
      let newEmployeeList: employee[] = [];
      for (let i = 0; i < this.employees.length ; i++) {
        let value = this.employees[i];

          if(value.department_id === this.selectedDepartment.id)
          {
            newEmployeeList.push(value);
          }
      }
      return newEmployeeList;
    }
    else
    {
      return this.employees;
    }

    //return this.employees;
    //[hidden]="employee.department_id !== selectedDepartment.id"
  }

  constructor(private employeesServeice: EmployeesService,private departmentService: DepartmentsService , private taskService:TaskService) { }

  ngOnInit() {
    this.employeesServeice.getEmployees().subscribe(employeesArray => this.employees = employeesArray);

    //event department change
    this.departmentService.onSelectedDepartmentChange.subscribe(
      (selectedDB: department) => {this.selectedDepartment = selectedDB}
    );

    this.employeesServeice.onSelectedEmployeeChanged.subscribe(
      (selectedEmployeeRecived) => {this.selectedEmployee = selectedEmployeeRecived}
    );
    
  }

  getDepartmentOfEmployee(employee:employee):department
  {
    return this.departmentService.getDepartmentById(employee.department_id);
  }

  onAddClicked()
  {
    this.showAdd = !this.showAdd;
  }

  onUpdateSelected(employeeEl)
  {
    this.showUpdate = true;
    this.selectedEmployee = employeeEl;
  }


}
