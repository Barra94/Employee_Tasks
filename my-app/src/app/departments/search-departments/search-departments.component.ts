import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { department } from '../department.model';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { DepartmentsService } from '../../departments.service';

@Component({
  selector: 'app-search-departments',
  templateUrl: './search-departments.component.html',
  styleUrls: ['./search-departments.component.css']
})
export class SearchDepartmentsComponent implements OnInit {

  //onDepartmentSearchClicked = new EventEmitter<department>();

  private searchTerms = new Subject<string>();
  departments : Observable<department[]>;

  constructor(private departmentService:DepartmentsService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.departments = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.departmentService.searchDepartments(term)),
    );
  }

  onDepartmentClicked(department:department)
  {
    //this.onDepartmentSearchClicked.emit(department);
    this.departmentService.onSelectDepartment(department);
  }

}
