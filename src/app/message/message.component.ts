import { Component } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles:[`
        textarea{
            width : 50%;
        }
        `]
})

export class MessageComponent{
    limit = 12;
    text:string="";

    color(){
        return this.text.length > this.limit - 10 ? "red" : "black";
    }
}