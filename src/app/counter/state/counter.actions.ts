import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');


//Add custom value to counter
export const addCustom = createAction(
    'addCustom',
    props<{value:number}>()
    );