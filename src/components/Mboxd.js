import React from 'react';
// Modbx 标记观察
import { observable } from 'mobx';
// 创建视图响应状态变化
import {observer} from 'mobx-react';

const ary = observable({
  conut: 0
})

@observer
class Mboxd extends React.Component{
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div>
        你好，Mobxd！
        <p>计数器：{ary.conut}</p>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleRecd}>-</button>
      </div>
    )
  }

  handleAdd = () => {
    this.ary.conut++;
  }

  handleRecd = () => {
    this.ary.conut--;
  }
}

export default Mboxd;