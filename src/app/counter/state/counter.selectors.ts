import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from './counter.state';

const getCounterState = createFeatureSelector<CounterState>('counter');//counter is same name given in app.module.ts

export const getCounter = createSelector(getCounterState,state=>{
 return state.counter;
})

export const getChannelName = createSelector(getCounterState,state=>{
    return //state.any other property if present
})

/* In the component where get ChannelName is used or channelName is subscribed
this.store.select(getChannelName).subscribe((channelName)=>{
    this.channelName=channelName
})

similarly other component can access other property of sate without affecting of 
triggering components which are not using this property
this.store.select(getCounter).subscribe((counter)=>{
    this.counter=counter
})

*/