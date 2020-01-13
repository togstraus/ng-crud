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


  ngOnInit() {   
  }

  deleteTodo(id: number){
    this.todosService.deleteTodo(id)
  }
  
  updateField: string = ''
  updateTodo(id: number, updateField: string){
    this.todosService.updateTodo(id, updateField)
    this.updateField = ''
  }
}