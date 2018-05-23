import { Component } from '@angular/core';

/**
 * {{ }} Strinf interpolation
 * [] Property Bending
 * () Event Bending
 * [()] Two Way Data Binding
 */
@Component({
    selector: 'app-aston',
    template: `
    <h1 [draggable]="true" [style.color]="'rebeccapurple'">
        Aston {{ name }} Component
    </h1>
    <input type="text"
    class="form-control" [(ngModel)]="name"/>
    <button class="btn btn-sm btn-default" [disabled]="name === '' ? true : false ">Hello</button>
    
    <button class="btn btn-sm btn-default" (click)="counter = counter + 1">+</button> {{ counter }}
    <button class="btn btn-sm btn-default" (click)="decrease()">-</button>`
})

export class AstonComponent{
    counter:number = 0;
    name:string = '';

    decrease() {
        return this.counter--;
    }
}