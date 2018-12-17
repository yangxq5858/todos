import React,{Component} from 'react';
import * as filterTypes from './filter-types'

export default class TodoFooter extends Component{
    render(){
        return (
            <div>
                {/*.row>.col-md-4*3  按tab键生成  */}
                <div className="row">
                    <div className="col-md-4">

                        {/*这个是bootstrap的徽章样式*/}
                        <button className="btn btn-primary" type="button">
                            您还有待办事项 <span className="badge">{this.props.activeTodoCount}</span>
                        </button>


                    </div>
                    <div className="col-md-6">
                        <button style={{marginRight:2}} className={`btn ${this.props.filterType===filterTypes.ALL?'btn-success':'btn-default'}`}
                                onClick={() => this.props.changeFilterType(filterTypes.ALL)}>全部</button>
                        <button style={{marginRight:2}} className={`btn ${this.props.filterType===filterTypes.ACTIVE?'btn-success':'btn-default'}`}
                                onClick={() => this.props.changeFilterType(filterTypes.ACTIVE)}>未完成</button>
                        <button style={{marginRight:2}} className={`btn ${this.props.filterType===filterTypes.COMPLETED?'btn-success':'btn-default'}`}
                                onClick={() => this.props.changeFilterType(filterTypes.COMPLETED)}>已完成</button>

                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-default ">删除</button>

                    </div>
                </div>




            </div>
        );
    }


}