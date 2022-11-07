import Link from "next/link";
import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [updateComment, setUpdateComment] = useState("");

  const fetchComments = async () => {
    setIsLoading(true);
    const response = await fetch("api/comments");
    const data = await response.json();
    setComments(data);
    setIsLoading(false);
  };

  const addComment = async () => {
    if (comment !== "") {
      setIsLoading(true);
      const response = await fetch("api/comments", {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setComments(data);
      setComment("");
      setIsLoading(false);
    }
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setComments(data);
  };

  const handleUpdateComment = async (commentId) => {
    setIsEdit(false);
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      body: JSON.stringify({ updateComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setComments(data);
  };

  const handleEdit = (commentId) => {
    setIsEdit(true);
    setId(commentId);
  };

  return (
    <div>
      <h3>Comments</h3>
      <button onClick={fetchComments}>Load Comments</button>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={addComment}>Add Comment</button>
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id}>
              <p>
                {isEdit && id === comment.id ? (
                  <input
                    type="text"
                    value={updateComment || comment.text}
                    onChange={(e) => setUpdateComment(e.target.value)}
                  />
                ) : (
                  <span>{comment.text}</span>
                )}
                {isEdit && id === comment.id ? (
                  <button onClick={() => handleUpdateComment(comment.id)}>
                    Update
                  </button>
                ) : (
                  <button onClick={() => handleEdit(comment.id)}>Edit</button>
                )}
                <button onClick={() => deleteComment(comment.id)}>
                  Delete
                </button>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
