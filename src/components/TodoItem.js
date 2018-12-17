import React, {Component} from 'react';

export default class TodoItem extends Component{
    constructor(props){
        super(props);

    }


    handleChange=(event)=>{


    }

    render(){
        let todo = this.props.todo;
        return (
            <li className="list-group-item">
                {/*.row>.col-md-1+.col-md-10+.col-md-1  按tab键生成下面的代码 */}
                <div className="row">
                    <div className="col-md-1">
                        <input type="checkbox" checked={todo.completed} onChange={()=>this.props.toggle(todo.id)} />
                    </div>
                    <div className="col-md-10" style={{textDecoration:todo.completed?'line-through':''}} >
                        {todo.title}
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger btn-xs" onClick={()=>this.props.remove(todo.id)}>X</button>
                    </div>
                </div>


            </li>

        );
    }
}