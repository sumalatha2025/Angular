import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
todoList:string[] = [];
//todoList1:string[] = [];
inputvalue:string = "";
show = "";
editValue ="";
edittodo(name:string){
  this.show=name;
  console.log("name=", name, "show=",this.show);
  this.editValue="";
 }
 updatedEditValue(inputValue:any){  
  console.log("updatedName",inputValue);
  this.editValue = inputValue;
 }
 updateValue(name:any):any{
 if(this.editValue ===""){
    this.show = "";
    return;
  }
  this.todoList = this.todoList.map((value)=>{
    console.log("value",value);
    console.log("name",name);
    if(value==name){
      return this.editValue;
    }else{
      return value;
    }
    
    console.log("value",value);
    console.log("name",name);
  });
 }
removetodo(name: string){
  //console.log("name:", name);
  this.todoList = this.todoList.filter(value => value !== name
  //  console.log("value", value);
  );
  
}
addtodo(){
  if(this.inputvalue != ""){
  this.todoList.push(this.inputvalue);
  this.inputvalue="";
  }
  else{
    alert("please enter proper value..")
  }
}
ngOnInit(){
  this.todoList = ["Task 1", "Task 2"];
}
}
