import { Component, OnInit } from '@angular/core';
import{TodoService} from './todo.service'
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {

  constructor(private todoService:TodoService) { }
  todos:Todo[]=[];
  errorMessage:string;
  getTodos(){
    this.todoService.getTodos().subscribe(t=>this.todos=t
      ,error=>this.errorMessage=<any>error);
  }
  ngOnInit() {
    this.getTodos();
  }

}
