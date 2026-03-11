import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

export default function CommentComponent({ currentValue, onSubmit }) {
  const [fieldLabel, setFieldLabel] = useState("");
  const [comment, setComment] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFileSize((e.target.files[0].size / 1024 / 1024).toFixed(2) + " MB");
    }
  };

  const handleDiscard = () => {
    setFieldLabel("");
    setComment("");
    setFileName("");
    setFileSize("");
    setSubmitted(false);
  };

  const handleSubmit = () => {
    onSubmit({
      fieldLabel,
      comment,
      fileName,
      fileSize,
    });
  };

  return (

    <div className="w-[420px] bg-white rounded-xl shadow-md p-6 space-y-5">

      {/* Current Value */}
      <div>
        <p className="text-sm text-gray-500 mb-1">Current value</p>
        <p className="font-semibold text-gray-800">
          The quick brown fox jumps over the lazy dog
        </p>
      </div>

      {/* Field Label */}
      <div>
        <p className="text-sm text-gray-500 mb-1">Field label</p>
        <input
          type="text"
          placeholder="Placeholder"
          value={fieldLabel}
          onChange={(e) => setFieldLabel(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-black outline-none focus:ring-2 focus:ring-orange-300"
        />
      </div>

      {/* Comment */}
      <div>
        <p className="text-sm text-gray-500 mb-1">Comment</p>
        <textarea
          placeholder="Please provide a reason for the change"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-black h-24 resize-none outline-none focus:ring-2 focus:ring-orange-300"
        />
      </div>

      {/* Upload File */}
      <div>
        <p className="text-sm text-gray-500 mb-1">Upload support document</p>

        <label className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 cursor-pointer text-gray-500 text-sm">

          <span>{fileName || "Select a file to upload"}</span>

          <FiUpload className="h-4 w-4 opacity-70" />

          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-2">
        <button
          onClick={handleDiscard}
          className="px-5 py-2 rounded-full border-2 border-orange-400 text-orange-400 font-medium hover:bg-orange-50 transition bg-white"
        >
          Discard
        </button>

        <button
          onClick={handleSubmit}
          className="px-5 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition"
        >
          Submit Suggestion
        </button>
      </div>
    </div>


  );
}