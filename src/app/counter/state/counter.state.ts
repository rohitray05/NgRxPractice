


//This initial state if in case way too big then 
//It becomes difficut to inject in the components for dispatch and select
//Thus we make interface to reduce the efffort


//createselectors and featureselectors if not used then
//even if one data gets changed all the subscriptions will be called 
//To make these changes we are using CreateFeatureSelector in counter.selectors.ts


export interface CounterState{
    counter:number
}


export const initialState:CounterState = {
    counter:0
}