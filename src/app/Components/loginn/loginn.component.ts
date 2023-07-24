import { Component } from '@angular/core';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent {
 
 inputValue: string = ' ';
todosList:string[] = [] ;
 addToList(){
  this.todosList.push(this.inputValue);
  this.inputValue = '';

 }
 removeToDo(todoIndex:number){
   this.todosList = this.todosList.filter((item,index) => index != todoIndex);
 }


}
