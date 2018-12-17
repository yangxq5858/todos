import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem'
import TodoFooter from "./TodoFooter";
import * as filterTypes from './filter-types'


export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {todos:[
                {id:Math.random(),title:'我要学习React',completed:false},
                {id:Math.random(),title:'我要学习BootStrap',completed:true}
                ],
                filterType:filterTypes.ALL
        }; //初始化
    }

    // 添加一个待办
    addtodo = (todo) =>{
        //3种方式来合并对象及数据
        todo = Object.assign(todo,{id:Date.now(),completed:false}); //利用Object.assign 对目标对象赋值并合并，返回一个新对象
        // todo = Object.assign({},{id:Date.now(),completed:false},todo); //利用Object.assign 对将2个对象合并并赋值给空对象，返回一个新对象
        /** todo = {id:Date.now(),completed:false,...todo}; //利用es7的语法  ...展开属性*/

        let todos= this.state.todos; //注意，这里不能直接用push添加
        todos.push(todo);

        this.setState({todos});


    }

    // 选中checkbox或取消选中，让内容变为有删除线的内容
    handleToggle = (id) =>{
        let todos= this.state.todos; //获取原来的状态数据
        let todos1 = todos.map((todo)=>{
            if (todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo; //这里加了返回值，就改变了原来对象内部的值了
        });

        // 这里的todos 和 todos1 的数据是一样的
        // console.log('todos',todos);
        // console.log('todos1',todos1);

        this.setState({todos});
    }


    toggleAll = (event) => {
        let todos= this.state.todos; //获取原来的状态数据
        let checked = event.target.checked;
        todos.map((todo)=>{
                todo.completed = checked;
                return todo; //这里加了返回值，就改变了原来对象内部的值了
            });

        this.setState({todos});

    }

    // 删除一个元素
    handleRemove = (id) => {
        let todos= this.state.todos; //获取原来的状态数据
        let index = todos.findIndex(todo=>todo.id === id); //根据id找到索引值
        todos.splice(index,1);                             //删除指定索引位置的元素，删除1个
        this.setState({todos});

    }

    // 改变过滤条件
    changeFilterType = (filterType) => {
        this.setState({filterType})

    }


    render() {
        let todos = this.state.todos;
        /*数组的reduce函数：第一个参数为函数，第二个参数为传入的默认值，
        reduce的执行就是从数组的0个元素开始，依次循环处理，第一次循环的值，再作为参数传入到函数的第一个参数中*/
        let activeTodoCount = todos.reduce( (count,todo) =>{
            return count + (todo.completed?0:1);

        },0);

        //过滤显示数据
        let showTodos = todos.filter((todo)=>{
            switch (this.state.filterType) {
                case filterTypes.ACTIVE:
                    return !todo.completed; //表示显示未完成的
                case filterTypes.COMPLETED:
                    return todo.completed;  //显示已完成的
                default:
                    return true;            //表示全部显示

            }
        })




        //采用变量的方式，方便修改
        let main = (

            // ul.list-group 按tab键生成
            <ul className="list-group">
                {
                    // 这里判断todos要有元素，才显示，全部选中的一行
                    todos.length>0?<li className="list-group-item">
                    <input type="checkbox" checked={activeTodoCount===0} onChange={this.toggleAll} />
                    {
                        activeTodoCount===0?'全部取消':'全部选中'
                    }
                    </li>:null

                }

                {
                    showTodos.map(
                        (todo,idx) =>
                        <TodoItem key={idx} todo={todo} toggle={this.handleToggle} remove={this.handleRemove} ></TodoItem>
                    )

                }

            </ul>

        );


        return (
            <div className="container" style={{marginTop:20}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">

                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addtodo={this.addtodo}  />
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">
                                <TodoFooter activeTodoCount={activeTodoCount} changeFilterType ={this.changeFilterType} filterType={this.state.filterType} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }


}