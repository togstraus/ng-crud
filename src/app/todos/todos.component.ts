import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private search: string = '';
   constructor(private todosService: TodosService) { }

   private loading: boolean = true
  ngOnInit() {   
  }

  deleteTodo(id: number){
    this.todosService.deleteTodo(id)
  }

  // updateTodo(title: string){
  //   this.todosService.updateTodo(title)
  // }

}
