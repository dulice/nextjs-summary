import { comments } from "data/comments"

export default function handler(req, res){
    // let comments = "http://localhost:4000/comments";
    const { commentId } = req.query;
    if(req.method === "DELETE") {
        const index = comments.findIndex(comment => comment.id === parseInt(commentId));
        comments.splice(index, 1);
        res.status(200).json(comments);
    } else if ( req.method === 'PATCH') {
        const comment = comments.find(comment => comment.id === parseInt(commentId));
        comment.text = req.body.updateComment;
        res.status(200).json(comments);
    }
}