import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { employee} from '../employee.model';
import { department } from '../../departments/department.model';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee : employee;
  @Output() onUpdateClicked = new EventEmitter<employee>();
  
  constructor(private employeeService:EmployeesService) { }

  ngOnInit() {
  }

  onDeleteEmployee(employeeToDelete:employee)
  {
    this.employeeService.deleteEmployee(employeeToDelete);
  }

  onUpdateEmployee(employee:employee)
  {
    this.onUpdateClicked.emit(employee);
  }


}
