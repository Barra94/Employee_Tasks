import { Component, OnInit, EventEmitter } from '@angular/core';
import { employee } from '../employee.model';
import { Subject, Observable } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {



  private searchTerms = new Subject<string>();
  employees : Observable<employee[]>;

  constructor( private employeeService : EmployeesService) { }

  ngOnInit() {
    this.employees = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.employeeService.searchEmployees(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  onEmployeeClicked(employee:employee)
  {
    this.employeeService.onSelectEmployee(employee);
  }

}
