import React,{useState} from "react"
import axios from "axios"
import { AllProduct, Api } from "./Type"
export const Datapro=()=>{
    return  async(dispatch)=>{
        const res =await axios.get(Api)
        dispatch(
       { 
                type:AllProduct,
                data:res.data,
            }
        )
    }
}

// export const filter=()=>{
//     const [filtercategory, setfiltercategory] = useState()
// }
