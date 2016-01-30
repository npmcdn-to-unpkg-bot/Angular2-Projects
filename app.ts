import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;

class NewTask{
	User:string;
	Taskname:string;
	
	
	constructor(User:string,task:string){
		this.User=User;
		this.Taskname=task;
		
	}
}


@Component({
	selector: 'tr',
	host:{
		class: 'td'
	},
	
	inputs:['todo'],
	template: `
	<td>{{ todo.User }}</td>
	<td>{{ todo.Taskname }}</td>
	<td>{{ todo.Taskname }}</td>
	`	
})
class showTable{
	todo:NewTask;
	
	
}

@Component({
		selector: 'main-Component',
		
		host:{
			class:'myClass'
		},
		directives:[showTable],
		
		templateUrl: 'todo.html',
		
		
})

class MainTodo{
	
	todos: NewTask[]=[];
	
	
		
	addTodo(user:HTMLInputElement, todo:HTMLInputElement): void{
		console.log(`Adding Name: ${user.value} and Todo: ${todo.value}`);
		
		var obj=new NewTask(user.value,todo.value);
		console.log(obj);
		this.todos.push(obj);
		console.log(this.todos);
		user.value="";
		todo.value="";
		
	}
	
}

bootstrap(MainTodo);