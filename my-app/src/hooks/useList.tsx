import { useState } from "react";

export const useList = (arr: any) => {
  const [list, setList] = useState<any>(arr);
  const [pre, setPre] = useState(arr);

  const push = (x: any) => {
    setList([...list, x]);
  };

  const pop = () => {
      list.pop()

      setList([...list])
  }

  const clear = () => {
      setList([])
  }

  const reset = () => {
      setList([...pre])
  }
 
  const map = (d:any) => {
      let newList = list.map(d)

      setList([...newList])
  }

  return [list, push, pop ,clear,reset,map];
};
