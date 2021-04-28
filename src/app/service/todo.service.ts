import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Todo} from '../model/Todo';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : Todo[];
  constructor() {

    this.todos = [
{
  id: '111',
  title : 'learn CPP',
  isComplete : true,
  date : new Date(),
},
{
  id: '112',
  title : 'learn React',
  isComplete : true,
  date : new Date(),
},
{
  id: '113',
  title : 'learn Angular',
  isComplete : false,
  date : new Date(),
},

    ]
   }

   getTodos(){
     return of(this.todos)
   }

   addTodos(todo : Todo){
     this.todos.push(todo);
     
    }

    changeTodos(todo : Todo){

      this.todos.map(Singletodo => {
        if (Singletodo.id == todo.id) todo.isComplete = !todo.isComplete; 
      })
    }

    deleteTodo(todo : Todo){
      const indexofTodo = this.todos.findIndex(
        (currentobj) => currentobj.id === todo.id

      );

      this.todos.splice(indexofTodo,1);
    }
}
