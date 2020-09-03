import React, { createContext } from 'react';
import {useLocalStore, observer} from 'mobx-react-lite';

// 顶层组件创建
export const MyContext = createContext(null);

// 函数组件
export const Counter = observer((props) => {
  const store = useLocalStore(() => (
    {
      count: 1,
      get getCount () {
        return store.count;
      },
      handleCount () {
        store.count += 2;
      }
    }
  ));

  return (
    <MyContext.Provider value = {store}>
      {props.children}
    </MyContext.Provider>
  )
})

