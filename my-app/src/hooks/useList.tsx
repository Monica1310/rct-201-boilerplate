import { useState } from "react";

export const useList = (arr: any) => {
  const [list, setList] = useState<any>(arr);
  const [prev, setPrev] = useState(arr);

  const push = (no: any) => {
    setList([...list, no]);
  };

  const pop = () => {
    list.pop();

    setList([...list]);
  };

  const clear = () => {
    setList([]);
  };

  const reset = () => {
    setList([...prev]);
  };

  const map = (data: any) => {
    let newData = list.map(data);
    setList([...newData]);
  };


  return [list, push,pop,clear,reset,map];
};