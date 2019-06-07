import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../departments.service'
import { department } from '../department.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  departmentName: string;
  departmentBuilding: string;

  constructor(private departmentService: DepartmentsService) { }

    //adding new department to the departments array.
    onCreateDepartment()
    {
     let departmentToAdd = new department(this.departmentName, this.departmentBuilding);
     //this.departmentService.addDepartment(dep).subscribe( department => {this.departments.push(department)});
     //this.departments.push(dep);
     //this.selectedDepartment = dep;
     this.departmentService.addDepartment(departmentToAdd);
     this.departmentName = "";
     this.departmentBuilding = "";
    }

  ngOnInit() {
  }

}
