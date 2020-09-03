import React from 'react';
import {MyContext} from './Counter';
import { toJS } from 'mobx';
import {Observer} from 'mobx-react-lite';

export class CounterClass extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <MyContext.Consumer>
        {
          store => {
            console.log('store：', toJS(store));
            return (
              <>
                  <p>counter2: {store.count}</p> {/* 这种方式在 class 组件中无效，不会引发重渲染 */}
                  <Observer>{() => <p>counter2: {store.count}</p>}</Observer> {/* 必须这样写，Observer 组件是mobx-react-lite提供的唯一可在类组件中使用的组件 */}
                  <button onClick={() => store.handleCount()}>Counter Add</button>
              </>
            )
          }
        }
      </MyContext.Consumer>
    )
  }
}