import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './header/header.component';
import { DeparmentItemComponent } from './departments/deparment-item/deparment-item.component';
import { EmployeeItemComponent } from './employees/employee-item/employee-item.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { DepartmentUpdateComponent } from './departments/department-update/department-update.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { MployeeUpdateComponent } from './employees/mployee-update/mployee-update.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { TaskUpdateComponent } from './tasks/task-update/task-update.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentDetailsComponent } from './departments/department-details/department-details.component';
import { SearchDepartmentsComponent } from './departments/search-departments/search-departments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeSearchComponent } from './employees/employee-search/employee-search.component';
import { TaskSearchComponent } from './tasks/task-search/task-search.component';

const appRoutes: Routes = 
[
  {path:'', component:DashboardComponent},
  {path:'departments' , component:DepartmentsComponent},
  {path:'employees', component:EmployeesComponent},
  {path:'tasks', component:TasksComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DepartmentsComponent,
    EmployeesComponent,
    HeaderComponent,
    DeparmentItemComponent,
    EmployeeItemComponent,
    TaskItemComponent,
    DepartmentUpdateComponent,
    AddDepartmentComponent,
    MployeeUpdateComponent,
    EmployeeDetailsComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    AddEmployeeComponent,
    TaskUpdateComponent,
    DashboardComponent,
    DepartmentDetailsComponent,
    SearchDepartmentsComponent,
    EmployeeSearchComponent,
    TaskSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
