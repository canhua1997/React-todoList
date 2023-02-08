import React from "react";
import {nanoid} from "nanoid";
import PropTypes from 'prop-types'

export default class Header extends React.Component{
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    //键盘事件的回调
    handleKeyUp = (event) =>{
        //解构赋值获取key，target
        const {key,target} = event
        //判断是否收回车按键
        if (key === 'Enter') {
            //添加的todo名字不能为空
            if (target.value.trim() === ''){
                alert("输入不能为空")
                return
            }
            //准备好一个todo对象
            const todoObj = {id: nanoid(),name:target.value,done:false}
            this.props.addTodo(todoObj)
            //清空输入
            target.value= ''
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称,按回车键确认"/>
            </div>
        )
    }
}
