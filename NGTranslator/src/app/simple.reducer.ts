import { Action } from "@ngrx/store";

export function simpleReducer (state:string="Hello Reshul", action:Action){

    console.log(action.type, state);
    switch(action.type){
        case 'English': return "How are you all doing";
        case 'Hindi': return "Kaise hai aap sab?"
        default: return state;
    }

}