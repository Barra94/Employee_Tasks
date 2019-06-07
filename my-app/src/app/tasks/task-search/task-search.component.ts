import { Component, OnInit } from '@angular/core';
import { task } from '../task.model';
import { Subject, Observable } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { employee } from '../../employees/employee.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  tasks : Observable<task[]>;

  
  constructor(private taskService : TaskService) { }

  ngOnInit() {
    this.tasks = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.taskService.searchTAsks(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  onTasksClicked(task:task)
  {
    this.taskService.onSelectTask(task);
  }

}
