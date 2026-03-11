import React, { useState } from "react";
import { FiEye, FiDownload } from "react-icons/fi";
import { FaFileAlt } from "react-icons/fa";

export default function SubmittedCard({ data, deleteComment }) {
    const handleViewFile = () => {
        if (!data.file) return;

        const fileURL = URL.createObjectURL(data.file);
        window.open(fileURL, "_blank");
    };

    const handleDownloadFile = () => {
        if (!data.file) return;

        const url = URL.createObjectURL(data.file);

        const link = document.createElement("a");
        link.href = url;
        link.download = data.file.name;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (

        <div className="w-[420px] bg-white rounded-xl shadow-md p-6">

            <div>
                <p className="text-sm text-gray-500 mb-1">Current Value</p>
                <p className="font-semibold text-gray-800 mb-2">The quick brown fox jumps over the lazy dog</p>
            </div>

            <div>
                <p className="text-sm text-gray-500 mb-1">Comment</p>
                <p className="font-semibold text-gray-800 mb-2">{data.comment}</p>
            </div>

            <div>
                <p className="text-sm text-gray-500 mb-2">Supporting Document Attached</p>
                <div className="border border-gray-300 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-500 text-white p-3 rounded-md">
                                <FaFileAlt size={16} />
                            </div>

                            {/* File Name + Size */}
                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    {data.fileName}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {data.fileSize}
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">

                            <button
                                className="border border-gray-300 rounded-md p-2 hover:bg-gray-100"
                                onClick={handleViewFile}
                            >
                                <FiEye className="text-gray-600" />
                            </button>

                            <button 
                            className="border border-gray-300 rounded-md p-2 hover:bg-gray-100"
                            onClick={handleDownloadFile}
                            >
                                <FiDownload className="text-gray-600" />
                            </button>
                        </div>

                    </div>

                </div>

                {/* Delete and Edit Buttons */}
                <div className="flex items-center justify-between pt-4">

                    <button
                        className="text-orange-500 px-5 py-2 rounded-full border border-orange-400"
                        onClick={deleteComment}
                    >
                        Delete Comment
                    </button>

                    <button className="text-white px-5 py-2 rounded-full bg-orange-500">
                        Edit Comment
                    </button>
                </div>
            </div>



        </div>


    )
}