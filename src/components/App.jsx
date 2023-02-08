//创建"外壳组件"
import React from 'react'
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

export  default class App extends React.Component{
    //状态在哪里,操作状态的方法就在哪里

    //初始化状态
    state = {todos: [
            {id: '001',name:'吃饭',done:true},
            {id: '002',name:'睡觉',done:true},
            {id: '003',name:'打代码',done:false},
            {id: '004',name:'逛街',done:false}
        ]
    }
    //addTodo 用于添加一个todo, 接收的参数收todo对象
    addTodo = (todoObj) =>{
        //获取原todos
        const {todos} = this.state
        const newTodos = [todoObj,...todos]
        this.setState({todos:newTodos})
    }

    //updateTodo用于更新一个todo对象
    updateTodo = (id,done)=>{
        //获取状态中的todos
        const {todos} = this.state
        //匹配处理数据
        const newTodos =  todos.map( (todo) => {
            if(todo.id === id) return {...todo,done}
            return todo
        })
        this.setState({todos: newTodos})
    }

    //deleteTodo用于删除一个todo对象
    deleteTodo = (id) =>{
        //获取原来todos
        const {todos} = this.state
        //删除指定id的todo对象
        const newTodos = todos.filter((todo)=>{
            return todo.id !== id
        })

        //跟新状态
        this.setState({todos:newTodos})
    }

    //checkAllTodo用于全选
    checkAllTodo = (done) =>{
        //获取原来的todos
        const {todos} = this.state
        //加工数据
        const newTodos = todos.map( (todo)=>{
            return {...todo,done}
        })
        this.setState({todos: newTodos})
    }

    //clearAllDone用于清除所有已完成的
    clearAllDone = () =>{
        //获取原来的todos
        const {todos} = this.state
        const newTodos = todos.filter( (todo) => {
            return !todo.done
        })
        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                   <Header addTodo={this.addTodo}/>
                   <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                   <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}
