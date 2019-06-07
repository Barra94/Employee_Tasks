import { Injectable, EventEmitter } from '@angular/core';
import { Observable,of,ObjectUnsubscribedError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { employee} from './employees/employee.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

    private EmployeesURL = "http://i875395.hera.fhict.nl/api/360601/employee";
 

  constructor(private http: HttpClient) { }

  onSelectedEmployeeChanged = new EventEmitter<employee>();
  selectedEmployee:employee;


  employees:employee[];

 /* employees:employee[] = [
    new employee(0,"michael","selena",10),
    new employee(1,"philip","selena",10),
    new employee(0,"Rome","selena",10),
    new employee(1,"Linda","selena",10)
  ]*/
  

 

  onSelectEmployee(employee: employee)
  {
    this.selectedEmployee = employee;
    this.onSelectedEmployeeChanged.emit(employee);
  }

  //getEmployees():Observable<employee[]>
  //{
  //  return this.http.get<employee[]>(this.EmployeesURL);
  //}

  getEmployees():Observable<employee[]>
  {
   // return of(this.employees);
    return this.http.get<employee[]>(this.EmployeesURL).pipe(tap(d => this.employees = d));
  }
  

  addEmployee(employeeToAdd: employee)
  {
   // this.employees.push(employeeToAdd);
   this.http.post<employee>(this.EmployeesURL,employeeToAdd,httpOptions).subscribe(d =>this.employees.push(d));
  }

  deleteEmployee(employeeToDelete: employee)
  {
  // this.employees.splice(this.employees.indexOf(employeeToDelete),1);
  let deleteURL = this.EmployeesURL +'?id=' + employeeToDelete.id;
  this.http.delete<employee>(deleteURL , httpOptions).subscribe(d => this.employees.splice(this.employees.indexOf(employeeToDelete),1));
  }

  updateEmployee(employeetToUpdate: employee):Observable<employee>
 {

  let updateURL = this.EmployeesURL +'?id=' + employeetToUpdate.id;
  return this.http.put<employee>(updateURL , employeetToUpdate , httpOptions);
  //.pipe(tap(d => {this.departments[this.departments.indexOf(departmentToUpdate)] = d  } ));
  //.subscribe(d=>this.departments.push(d));

}

  getEmployeeByDepartment(id:number)//
  {
    let newEmployeeList: employee[] = [];
    for (let i = 0; i < this.employees.length ; i++)
    {
      let value = this.employees[i];

        if(value.department_id === id)
        {
          newEmployeeList.push(value);
        }
    }
    return newEmployeeList;
  }
  
  searchEmployees(term: string): Observable<employee[]> 
  {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    let newArray:employee[] = [];
    
    for (let i = 0; i < this.employees.length ; i++) {
     let value = this.employees[i];
 
       if(value.first_name.search(term) != -1 || value.last_name.search(term) != -1)
       {
         newArray.push(this.employees[i]);
       }
   }
   return of(newArray);
  }

  getEmployeeById(id:number):employee
  {
    for (let i = 0; i < this.employees.length ; i++)
    {
      let value = this.employees[i];

        if(value.id === id)
        {
          return value;
        }
    }
    return null;
  }
}
