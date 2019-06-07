import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { department } from '../department.model';
import { DepartmentsService } from '../../departments.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {

  @Input() selectedDepartment:department;
  @Output() CloseSelect = new EventEmitter<void>();

  constructor(private departmentService:DepartmentsService) { }

  ngOnInit() {
  }

  onUpdateDepartment()
  {
    this.departmentService.updateDepartment(this.selectedDepartment).subscribe();
  }

  onCloseClicked()
  {
    this.CloseSelect.emit();
  }

}
