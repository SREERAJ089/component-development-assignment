import React, { useState } from "react";
import CommentComponent from "./Components/CommentComponent";
import SubmittedCard from "./Components/SubmittedCard";
import CommentBox from "./Components/CommentBox";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [data, setData] = useState({
    currentValue: "The quick brown fox jumps over the lazy dog",
    comment: "",
    fileName: "",
    fileSize: "",
  });

  const handleSubmit = (formData) => {
    setData({
      ...data,
      comment: formData.comment,
      fileName: formData.fileName,
      fileSize: formData.fileSize,
      file: formData.file
    });
    setSubmitted(true);
  }

  const deleteComment = () =>{
    setData({
      ...data,
      comment: "",
      fileName: "",
      fileSize: "",
    });
    setSubmitted(false);
  }

  const showCommentDialog = () => {
    setShowCommentBox(true);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-black">
      <div className="w-[420px] flex justify-end mb-2">
        <div className="flex items-center p-2 border border-white gap-2 rounded-full">
          <button
            className="text-white"
            onClick={showCommentDialog}
          >
            Comments
          </button>
          <div className="flex items-center justify-center text-sm text-white h-5 w-5 p-2 bg-red-500 rounded-full">
            1
          </div>

        </div>
      </div>
      {showCommentBox && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <CommentBox closeDialog={() => setShowCommentBox(false)} />
        </div>
      )}
      {submitted ? (
        <SubmittedCard data={data} deleteComment={deleteComment} />
      ) : (
        <CommentComponent
          currentValue={data.currentValue}
          onSubmit={handleSubmit}
        />
      )}

    </div>
  );
}