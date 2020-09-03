import React from 'react';
// Modbx 标记观察
import { observable, decorate, computed, autorun, action } from 'mobx';
// 创建视图响应状态变化
import {observer} from 'mobx-react';

let appState = observable({
  timer: 0
});

let autoAry = observable.map({ key: "value"})

// observable可以是任意类型
const list = observable([1, 2, 4]);

const person = observable({
  firstName: "Clive Staples",
  lastName: "Lewis"
});

// observable.box 提供了set方法
const temperature = observable.box(20);


// observable 对象
const persond = observable({
  // observable 属性
  name: '张三',
  age: 42,
  showAge: false,

  // 计算属性
  get labelText() {
    return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
  },

  // 动作
  setAge (age) {
    this.age = 333;
  }
}, {
  setAge: action
});

// observable 数组
const todos = observable([
  {title: '标题1', completed: true},
  {title: '标题2', completed: false}
])

autorun(() => console.log(todos.filter(todo => !todo.completed).map(todo => todo.title).join(',')));


// observable.map(value, options) 映射

// 下列 observable 映射所暴露的方法是依据 ES6 Map 规范:
// has(key) - 返回映射是否有提供键对应的项。注意键的存在本身就是可观察的。
// set(key, value) - 把给定键的值设置为 value 。提供的键如果在映射中不存在的话，那么它会被添加到映射之中。
// delete(key) - 把给定键和它的值从映射中删除。
// get(key) - 返回给定键的值(或 undefined)。
// keys() - 返回映射中存在的所有键的迭代器。插入顺序会被保留。
// values() - 返回映射中存在的所有值的迭代器。插入顺序会被保留。
// entries() - 返回一个(保留插入顺序)的数组的迭代器，映射中的每个键值对都会对应数组中的一项 [key, value]。
// forEach(callback:(value, key, map) => void, thisArg?) - 为映射中每个键值对调用给定的回调函数。
// clear() - 移除映射中的所有项。
// size - 返回映射中项的数量。

// 以下函数不属于 ES6 规范，而是由 MobX 提供:
// toJS() - 将 observable 映射转换成普通映射。
// toJSON(). 返回此映射的浅式普通对象表示。(想要深拷贝，请使用 mobx.toJS(map))。
// intercept(interceptor) - 可以用来在任何变化作用于映射前将其拦截。参见 observe & intercept。
// observe(listener, fireImmediately?) - 注册侦听器，在映射中的每个更改时触发，类似于为 Object.observe 发出的事件。想了解更多详情，请参见 observe & intercept。
// merge(values) - 把提供对象的所有项拷贝到映射中。values 可以是普通对象、entries 数组或者 ES6 字符串键的映射。
// replace(values) - 用提供值替换映射全部内容。是 .clear().merge(values) 的简写形式。



// observable.box(value)

// 接收任何值并把值存储到箱子中， 使用set() / get() 获取/更新当前值



// 对象属性没有暴露 ‘observe’ 方法
// 使用 autorun
autorun(() => console.log(persond.labelText));


@observer
class Mboxd extends React.Component{
  constructor (props) {
    super(props);
    this.state = {}
  }

  // 可以直接引入 @observable 可以在实例字段和属性 getter 上使用。 对于对象的哪部分需要成为可观察的，@observable 提供了细粒度的控制。
  @observable price = 10.34;

  // 计算属性  需要通过 decorate 引入使用
  @computed get total() {
    return this.price * 8;
  }

  render () {
    return (
      <div>
        你好，Mobxd！
        <p>计数器：{appState.timer}</p>
        <button onClick={this.handleAdd.bind(this)}>+</button>
        <button onClick={this.handleRecd.bind(this)}>-</button>
        {/* 动态键 */}
        <p>{autoAry.size ? autoAry : ''}</p>
        {/* 任意类型 */}
        <p>{list}</p>
        <p>{person.firstName}</p>
        {/* temperature 对象值 */}
        <p>{temperature.value}</p>


        {/* @abservable */}
        <p>¥{this.price}</p>

        {/* @computed 类组件的属性函数 */}
        <p>@computed {Mboxd.total}</p>


        {/* observable 对象 {属性：参数    计算属性 get   动作action} */}
        <p>{this.persond}</p>
      </div>
    )
  }

  handleAdd = () => {
    autoAry.set('key', '张三');
    list[2] = 3;
    appState.timer++;
  }

  handleRecd = () => {
    appState.timer--;
    person.firstName = "C.S.";
    temperature.set(100);
    this.price = 30;

    // 调用计算属性
    persond.setAge(444);
    persond.name = 'Dave';
  }
}

decorate(Mboxd, {
  total: computed
})

export default Mboxd;