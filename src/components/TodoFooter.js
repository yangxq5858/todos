import React,{Component} from 'react';

export default class TodoFooter extends Component{




    render(){
        return (
            <div>
                {/*.row>.col-md-4*3  按tab键生成  */}
                <div className="row">
                    <div className="col-md-4">
                        您还有{this.props.activeTodoCount}待办事项
                    </div>
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        
                    </div>
                </div>




            </div>
        );
    }


}