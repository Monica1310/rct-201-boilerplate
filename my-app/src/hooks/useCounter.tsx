
import { useState } from "react";

export const useCounter = (init:number) => {

    const[value, setValue] = useState(init)
  


    // value, inc, dec, set

    const inc = (initi:number) => {
        
            setValue(value+init)
        
    }

    const dec = (init:number) => {
        setValue(value-init)
    }

    const set = (init:number) => {
        setValue(100)
    }

    return { value, inc, dec,set }


    
};
