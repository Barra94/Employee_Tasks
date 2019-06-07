import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { department } from '../department.model';
import { DepartmentsService } from '../../departments.service';

@Component({
  selector: 'app-deparment-item',
  templateUrl: './deparment-item.component.html',
  styleUrls: ['./deparment-item.component.css']
})
export class DeparmentItemComponent implements OnInit {

  @Input() department:department;
  @Output() onUpdateDepartmentClicked = new EventEmitter<department>();

  constructor(private departmentService: DepartmentsService) { }

  onDeleteDepartment(deparmentToDelete:department)
  {
    this.departmentService.deleteDepartment(deparmentToDelete);
  }

  onUpdateDepartment(selectedDepartment:department)
  {
    this.onUpdateDepartmentClicked.emit(selectedDepartment);
  }

  ngOnInit() {
  }

}
