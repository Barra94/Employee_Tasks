import { Component, OnInit, Input } from '@angular/core';
import { department } from '../department.model';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  @Input() selectedDepartment:department;

  constructor() { }

  ngOnInit() {
  }

}
