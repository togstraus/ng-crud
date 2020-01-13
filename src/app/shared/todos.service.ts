import {Injectable} from '@angular/core';

export interface Todo {
    id: number
    title: string
    completed: boolean
    date?: any
  }

@Injectable({providedIn: 'root'})
export class TodosService {    

    public todos: Todo[] = [
        {id:1, title: 'CRUD1', completed: true, date: new Date()},
        {id:2, title: 'CRUD2', completed: false, date: new Date()}, 
        {id:3, title: 'CRUD3', completed: true, date: new Date()},  
    ]    

    deleteTodo(id:number){
        this.todos = this.todos.filter(t => t.id !== id)
    }

    addTodo(todo: Todo){
        this.todos.push(todo)
    }    

    updateTodo(id: number, updateField: string){        
        const idx = this.todos.findIndex( t => t.id === id)
        this.todos[idx].title = updateField;        
        if (this.todos[idx].title === '')
            this.todos = this.todos.filter(t => t.id !== id)
    }
}