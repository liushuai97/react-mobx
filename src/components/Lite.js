import React from 'react';
// mobx功能只能够在纯函数组件中使用
import { observable } from 'mobx';
import { useLocalStore } from 'mobx-react';


// // 创建State
// function CreatingState() {
//   // 输入值
//   const simpleState = React.useRef(observable.array([1, 2, 3])).current
//   // state默认值
//   const [bigState] = React.useState(createExpensiveStore)
//   // 当前组件状态
//   const localState = useLocalStore(() => ({
//     count: 0,
//     inc() {
//       localState.count += 1
//     },
//   }))
//   return <Rendering simple={simpleState} big={bigState} local={localState} />
// }

// // React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent中以浅层对比 prop 和 state 的方式来实现了该函数。
// class CreatingState extends React.PureComponent {
//   simpleState = observable.array([1, 2, 3])
//   render() {
//     // class component does not support any other way of
//     // keeping observable state within a component
//     return <Rendering simple={this.simpleState} />
//   }
// }

