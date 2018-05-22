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
    <input type="text" [(ngModel)]="name"/>
    <button [disabled]="name === '' ? true : false ">Hello</button>
    
    <button (click)="counter = counter + 1">+</button> {{ counter }}
    <button (click)="decrease()">-</button>`
})

export class AstonComponent{
    counter:number;
    name:string;

    decrease() {
        return this.counter--;
    }
}