import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Subscription, Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
  
  counter:number;
  //This initial state if in case way too big then 
  //It becomes difficut to inject in the components for dispatch and select
  //Thus we make interface to reduce the efffort
  //constructor(private store: Store<{counter:{counter: number}}>) { } 
  constructor(private store: Store<{counter:CounterState}>) { }

    //Refactor:
  //Instead of making use of counterSubscription and subscribing one can use like Observable and use async pid to display
  counter$:Observable<number>

  counterSubscription:Subscription
  
  //@Input() counter;
  
  ngOnInit(): void {
    /* this.counterSubscription = this.store.select('counter').subscribe(data=>{
      this.counter=data.counter;
    }) */
    //getCounter is more refined version
    this.counter$ = this.store.select(getCounter);
  }

  /* ngOnDestroy():void{
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  } */

}
