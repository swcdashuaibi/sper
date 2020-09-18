import React,{Component} from "react";
import PropTypes from 'prop-types'

export default class CommentItem extends Component{
    static propTypes = {
        // delComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired,
        comment:PropTypes.object.isRequired
    }
    handleDel=()=>{
        const {comment,delComment,index} = this.props
        if(window.confirm(`确定删除${comment.username}吗`)){
            delComment(index)
        }
    }
    render() {
        var {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="/#" onClick={this.handleDel}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.comment}</p>
            </li>
        )
    }
}