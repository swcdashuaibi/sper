import React,{Component} from "react";
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";


export default class App extends Component{
    state={
        comments:[
            {username:'张三',comment:'react烦啊'},
            {username:'李四',comment:'react早啊'}
        ]
    }
    delComment = (index)=>{
        if(index){
            const {comments} = this.state
            comments.splice(index,1)
            this.setState({comments})
        }else{
            alert('123')
        }
    }
    addComment=(comment)=>{
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }
    render() {
        let {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment} ></CommentAdd>
                    <CommentList comments={comments} delComment={this.delComment}></CommentList>
                </div>
            </div>
        )
    }
}