import { AllProduct } from "./Type";

export const Reducerfirch=(state={produ:[]},action)=>{
    switch (action.type){
        case AllProduct:
            return {produ:action.data}
        default :
            return state
    }
}