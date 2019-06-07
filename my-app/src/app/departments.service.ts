import { Injectable,EventEmitter } from '@angular/core';
import { Observable ,of, ObjectUnsubscribedError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { department} from './departments/department.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';


//telling the server what i'm sending is a json file
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private DepartmentsURL = "http://i875395.hera.fhict.nl/api/360601/department";

  //constructor(private http: HttpClient) { }
  constructor(private http: HttpClient) { }



  //addDepartment(departmentToAdd: department): Observable<department>
  //{
  //  return this.http.post<department>(this.DepartmentsURL, departmentToAdd,httpOptions);
 // }

 /////////////////

 onSelectedDepartmentChange = new EventEmitter<department>();
 
 selectedDepartment: department;

 departments:department[];

 //departments:department[] = 
 //[
 //  new department("ICT","R1"),
  // new department("marketing","R3"),
 //];

 onSelectDepartment(department: department)
 {
   this.selectedDepartment = department;
   this.onSelectedDepartmentChange.emit(department);
 }

 //getDepartments():Observable<department[]>
 //{
  // return of(this.departments);
 //}
 getDepartments()
 {
   //tap l7ta t3mel t8sem al code le jbto, mthlan bdak t3mel ns5a 3ndak bl service 
  return this.http.get<department[]>(this.DepartmentsURL).pipe(tap(d => this.departments = d));
 }

 addDepartment(departmentToAdd: department)
 {
   //this.departments.push(departmentToAdd);
   this.http.post<department>(this.DepartmentsURL,departmentToAdd,httpOptions).subscribe(d=>this.departments.push(d));
 }

 deleteDepartment(departmentToDelete: department)
 {
  //this.departments.splice(this.departments.indexOf(departmentToDelete),1);
  let deleteURL = this.DepartmentsURL +'?id=' + departmentToDelete.id;
  this.http.delete<department>(deleteURL , httpOptions).subscribe(d => this.departments.splice(this.departments.indexOf(departmentToDelete),1));
 }

 updateDepartment(departmentToUpdate: department):Observable<department>
 {

  let updateURL = this.DepartmentsURL +'?id=' + departmentToUpdate.id;
  return this.http.put<department>(updateURL , departmentToUpdate , httpOptions);
  //.pipe(tap(d => {this.departments[this.departments.indexOf(departmentToUpdate)] = d  } ));
  //.subscribe(d=>this.departments.push(d));

}

 getDepartmentById(id:number):department
 {
  for (let i = 0; i < this.departments.length ; i++) {
    let value = this.departments[i];

      if(value.id === id)
      {
        return value;
      }
  }
 }

 searchByTerm()
 {

 }

 searchDepartments(term: string): Observable<department[]> 
 {
   if (!term.trim()) {
     // if not search term, return empty hero array.
     return of([]);
   }
   let newArray:department[] = [];
   
   for (let i = 0; i < this.departments.length ; i++) {
    let value = this.departments[i];

      if(value.name.search(term) != -1)
      {
        newArray.push(this.departments[i]);
      }
  }
  return of(newArray);
 }


}
