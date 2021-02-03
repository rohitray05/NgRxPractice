import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';


@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {
  
  //This initial state if in case way too big then 
  //It becomes difficut to inject in the components for dispatch and select
  //Thus we make interface to reduce the efffort
  //constructor(private store: Store<{counter:{counter: number}}>) { }
  constructor(private store: Store<{counter:CounterState}>) { }
  
  /* @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>(); */
  ngOnInit(): void {
    
  }
  
  /* onIncrement():void{
    this.increment.emit();
  }
  
  onDecrement():void{
    this.decrement.emit();
  }
  
  onReset():void{
    this.reset.emit();
  } */

  onIncrement():void{
    this.store.dispatch(increment());
  }
  
  onDecrement():void{
    this.store.dispatch(decrement());
  }
  
  onReset():void{
    this.store.dispatch(reset());
  } 
}
