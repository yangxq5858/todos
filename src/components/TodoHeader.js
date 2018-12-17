import React, {Component} from 'react';

const ENTER_KEY = 13;

export default class TodoHeader extends Component{

    handleKeydown = (event)=>{
        if (event.keyCode === ENTER_KEY){
            event.preventDefault(); //阻止其他事件触发，这里加上可以阻止表单的默认提交，因为这里只有一个输入框，按回车键，就会提交
            let title = event.target.value;
            this.props.addtodo({title});
            event.target.value="";

        }

    }


    render(){
        // 这里是非受控组件，可以不用from包裹起来，也就不用event.preventDefault()来阻止默认事件的触发。
        return (
            <div>
                {/*<form>*/}
                    <div className="form-group">
                        <input type="text" onKeyDown={this.handleKeydown} autoFocus={true} className="form-control"/>
                    </div>

                {/*</form>*/}




            </div>



        );



    }



}