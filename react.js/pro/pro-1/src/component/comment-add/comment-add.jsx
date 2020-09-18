import React,{Component} from "react";
import PropTyps from "prop-types";

export default class CommentAdd extends Component{
    static propTypes={
        addComment:PropTyps.func.isRequired
    }
    state={
        comment:'',
        username:''
    }
    handleSubmit = ()=>{
        const comment = this.state
        this.props.addComment(comment)
    }
    handleNameChange= (event)=>{
        let username = event.target.value;
        this.setState({username})
    }
    handleContentChange= (event)=>{
        let comment = event.target.value;
        this.setState({comment})
    }
    render() {
        const {comment,username} = this.state
        return (
                <div className="col-md-4">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label>用户名</label>
                            <input type="text" className="form-control" value={username} placeholder="用户名" onChange={this.handleNameChange}></input>
                        </div>
                        <div className="form-group">
                            <label>评论内容</label>
                            <textarea className="form-control" rows="6" value={comment} placeholder="评论内容" onChange={this.handleContentChange}></textarea>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                            </div>
                        </div>
                    </form>
                </div>
        )
    }
}