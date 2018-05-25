import { Component } from '@angular/core';
import { Hello } from './app.hello.interface';
import { Recorder } from './app.recorder';
import { Db } from './app.db.recorder';


@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Hello {
  title = 'app';
  name = 'aston';
  rec: Recorder;
  
  constructor(){
    this.title = 'App';
    this.rec = new Db();
  }

  getText(event){
    this.rec.save(event);
    
  }

  sayHello() {
    return 'Hello ' + this.name;
  }
}
