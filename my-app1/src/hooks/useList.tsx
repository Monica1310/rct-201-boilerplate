import { useState } from "react";

export const useList = (arr: any) => {
  const [list, setList] = useState<any>(arr);
  const [pre, setPre] = useState(arr);

  const push = (n: any) => {
    setList([...list, n]);
  };

  const pop = () => {
    list.pop();

    setList([...list]);
  };

  const clear = () => {
    setList([]);
  };

  const reset = () => {
    setList([...pre]);
  };

  const map = (data: any) => {
    let newlist = list.map(data);
    setList([...newlist]);
  };

 

  return [list,  {push,pop,clear,reset,map,}];
};