import { Component, Input, Output, EventEmitter } from '@angular/core';

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
    @Input() text: string = '';
    @Input() limit: number=0;
    @Output() response = new EventEmitter();

    color(){
        return this.text.length > this.limit - 10 ? "red" : "black";
    }
    sendMessage(){
        this.response.emit(this.text);
    }
}