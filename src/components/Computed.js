import React from 'react';
import { observable, computed, decorate } from 'mobx';

// class Computed {
//   @observable  unit = 'c';
//   @observable age = 25;

//   @computed get temperkelv () {
//     return this.age * 10 + 10
//   }

//   @computed get add () {
//     return this.age++
//   }
// }

// decorate(Computed, {
//   unit: observable,
//   age: observable,
//   temperkelv: computed,
//   add: computed
// })

// 简略写法

// const comp = observable({
//   unit: 'c',
//   age: 25,
//   get total () {
//     return this.age++
//   }
// })

// export default comp;

// 计算值的setter
// const orderLine = observable.object({
//   proce: 0,
//   get total () {
//     return this.proce++
//   },
//   set total (total) {
//     this.proce = total * 10
//   }
// })

// export default orderLine;


// autorun  多用于打印日志
// 当使用 autorun 时，所提供的函数总是立即被触发一次，然后每次它的依赖关系改变时会再次被触发。 

// delay: 可用于对效果函数进行去抖动的数字(以毫秒为单位)。如果是 0(默认值) 的话，那么不会进行去抖。
// name: 字符串，用于在例如像 spy 这样事件中用作此 reaction 的名称。
// onError: 用来处理 reaction 的错误，而不是传播它们。
// scheduler: 设置自定义调度器以决定如何调度 autorun 函数的重新运行

// when 观察并运行给定 predicate

// class MyResource {
//   constructor() {
//       when(
//           // 一旦...
//           () => !this.isVisible,
//           // ... 然后
//           () => this.dispose()
//       );
//   }

//   @computed get isVisible() {
//       // 标识此项是否可见
//   }

//   dispose() {
//       // 清理
//   }
// }

// when-promise

// 如果没提供 effect 函数，when 会返回一个 Promise 。它与 async / await 可以完美结合。

// async function() {
//   await when(() => that.isVisible)
//   // 等等..
// }

// Reaction
// reaction 是 computed(expression).observe(action(sideEffect)) 或 autorun(() => action(sideEffect)(expression)) 的语法糖。


// observer 函数/装饰器可以用来将 React 组件转变成响应式组件。
// 确保任何组件渲染中使用的数据变化时都可以强制刷新组件

// 使用 inject 将组件连接到提供的 stores
