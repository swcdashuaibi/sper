import React,{Component} from "react";
import PropTypes from 'prop-types'
import CommentItem from "../comment-item/commentItem";
import './commentList.css'

export default class CommentList extends Component{
    static propTypes={
        comments:PropTypes.array.isRequired,
        // delComment:PropTypes.func.isRequired
    }
    render() {
        let {comments,delComment}=this.props
        return (
                <div className="col-md-8">
                    <h3 className="reply" onClick={delComment}>评论回复：</h3>
                    <h2 style={{display:'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                    <ul className="list-group">
                        {
                            comments.map((comment,index)=><CommentItem key={index} comment={comment} index={index} delComment={delComment}></CommentItem>)
                        }
                    </ul>
                </div>
        )
    }
}