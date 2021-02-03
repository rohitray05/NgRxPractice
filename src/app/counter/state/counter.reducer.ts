import { createReducer ,on, State} from '@ngrx/store';
import {initialState} from './counter.state';
import { increment, decrement, reset, addCustom } from './counter.actions';

const _counterReducer = createReducer(
    initialState,
    on(increment,(state)=>{
        return {
            ...state,
            counter:state.counter+1,
        }
    }),
    on(decrement,(state)=>{
        return {
            ...state,
            counter:state.counter-1,
        }
    }),
    on(reset,(state)=>{
        return {
            ...state,
            counter:0,
        }
    }),
    on(addCustom,(state,action)=>{
        console.log(action)
        return{
            ...state,
            counter: state.counter + action.value
        }
    }));

export function counterReducer(state,action){
    return _counterReducer(state,action);
}
