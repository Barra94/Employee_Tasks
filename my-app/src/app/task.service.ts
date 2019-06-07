import { Injectable,OnInit, EventEmitter } from '@angular/core';
import { Observable ,of, ObjectUnsubscribedError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { task } from './tasks/task.model';
import { employee } from './employees/employee.model';
import { EmployeesService } from './employees.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private TasksURL = "http://i875395.hera.fhict.nl/api/360601/task";

  constructor(private http: HttpClient) { }

  employees:employee[];

  tasks: task[];

  onSelcetedTaskChanged = new EventEmitter<task>();
  selectedTask:task;





 /* constructor(private employeesService:EmployeesService,) 
  { 
    this.employeesService.getEmployees().subscribe(employeesArray => this.employees = employeesArray);

    this.tasks =
    [
      new task(0,"make a design",[this.employees[0],this.employees[1]
      ] , new Date(2018,10,20)),
      new task(1, "make a skitsh of the app" ,[this.employees[0]] , new Date(2018,10,21)),
      new task(0, "start programming", [this.employees[0]] , new Date(2018,10,22)),
      new task(1, "upload the project", [] , new Date(2018,11,26))
    ];
  }*/

    
 onSelectTask(task:task)
 {
   this.selectedTask = task;
   this.onSelcetedTaskChanged.emit(task);
 }


 getTasks():Observable<task[]>
 {
  // return of(this.tasks);
  return this.http.get<task[]>(this.TasksURL).pipe(tap(d => this.tasks = d));
 }

  deleteTask(taskToDelete:task)
  {
   // this.tasks.splice(this.tasks.indexOf(taskToDelete),1);
   let deleteURL = this.TasksURL +'?id=' + taskToDelete.id;
  this.http.delete<task>(deleteURL , httpOptions).subscribe(d => this.tasks.splice(this.tasks.indexOf(taskToDelete),1));
  }

  updateTask(taskToUpdate: task):Observable<task>
  {
 
   let updateURL = this.TasksURL +'?id=' + taskToUpdate.id;
   return this.http.put<task>(updateURL , taskToUpdate , httpOptions);
   //.pipe(tap(d => {this.departments[this.departments.indexOf(departmentToUpdate)] = d  } ));
   //.subscribe(d=>this.departments.push(d));
 
 }
 

  getTAsksbyEmployee(employeeToGetTask:employee):task[]
  {

   for (let i = 0; i < this.tasks.length ; i++) 
   {
     let newTaskList: task[] = [];
     let value = this.tasks[i];//value one task

     for (let s = 0; s < value.employees.length ; s++) 
     {
      let employee = value.employees[s];

      if(employee === employeeToGetTask.id)
      {
         newTaskList.push(value);
      }
     }
     return newTaskList;
   }
  }

  searchTAsks(term: string): Observable<task[]> 
 {
   if (!term.trim()) {
     // if not search term, return empty hero array.
     return of([]);
   }
   let newArray:task[] = [];
   
   for (let i = 0; i < this.tasks.length ; i++) {
    let value = this.tasks[i];

      if(value.name.search(term) != -1)
      {
        newArray.push(this.tasks[i]);
      }
  }
  return of(newArray);
 }

}
