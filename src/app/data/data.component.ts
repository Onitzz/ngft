import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent{
  name:string = '';
  task= {text:''};

  tasks = [
      {title: 'task 1', done:false},
      {title: 'task 2', done:true},
      {title: 'task 3', done:false}
  ]

  addTask(){
    this.tasks.push({title : this.task.text, done:false});
    this.task.text="";
    
  }

  changeName(e: Event) {
    let input = <HTMLInputElement> e.target;
    this.name = input.value;
  }

}
