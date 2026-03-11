import React, { useState } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

export default function CommentBox({ closeDialog }) {

    const userData = {
        name: "You",
        image: "https://i.pravatar.cc/40?img=6",
    }

    const [comments, setComments] = useState("");
    const [data, setData] = useState([
        {
            id: 1,
            name: "Vishwas Gopal Ayyar",
            image: "https://i.pravatar.cc/40?img=1",
            comment: "All values form Scheme 1 and Scheme 4 are breached",
            time: "12:45 pm"
        },
        {
            id: 2,
            name: "Arjun Menon",
            image: "https://i.pravatar.cc/40?img=2",
            comment: "Please verify the compliance report again.",
            time: "12:46 pm"
        },
        {
            id: 3,
            name: "Ananya Sharma",
            image: "https://i.pravatar.cc/40?img=3",
            comment: "The data seems to be inconsistent.",
            time: "12:47 pm"
        },
        {
            id: 4,
            name: "Sreejesh M",
            image: "https://i.pravatar.cc/40?img=4",
            comment: "Correct, I have also observed the same in my analysis.",
            time: "12:47 pm"
        },
        {
            id: 4,
            name: "Megha Nair",
            image: "https://i.pravatar.cc/40?img=5",
            comment: "I have cross-verified the data and can confirm the breaches in Scheme 1 and Scheme 4.",
            time: "12:47 pm"
        }
    ]);

    const addComment = () => {
        if (comments.trim() === "") return;
        const commentObject = {
            id: data.length + 1,
            name: userData.name,
            image: userData.image,
            comment: comments,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setData([...data, commentObject]);
        setComments("");
    }

    return (
        <div className="w-[400px] h-[400px] bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <FiMessageSquare size={20} className="text-gray-600" />
                    <p className="text-sm font-medium text-gray-800">Add Comment</p>
                </div>

                <button
                onClick={closeDialog}
                >
                    <FiX className="text-xl text-black hover:text-red-500" />
                </button>
            </div>

            <div className="mt-4 max-h-[160px] overflow-y-auto space-y-4 scrollbar-hide">
                {data.map((comment) => (
                    <div key={comment.id} className="mt-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={comment.image}
                                alt={comment.name}
                                className="w-5 h-5 rounded-full"
                            />
                            <div className="flex justify-between w-full">
                                <p className="text-sm font-medium text-gray-800">{comment.name}</p>
                                <div>
                                    <p className="text-xs text-gray-500">{comment.time}</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-1 ml-8">{comment.comment}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col p-2 bg-gray-100 rounded-lg mt-4">
                <textarea
                    placeholder="Enter comment"
                    className="w-full h-20 p-3 text-left align-top resize-none rounded-lg bg-white text-black focus:outline-none focus:ring-0"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />
                <div className="flex w-full justify-between pt-3">
                    <button
                        className="border border-orange-500 rounded-full text-sm text-orange-500 px-5 py-2"
                        onClick={() => setComments("")}
                    >
                        Discard
                    </button>
                    <button
                        className="bg-orange-500 rounded-full text-sm text-white-500 px-5 py-2"
                        onClick={addComment}
                    >
                        Comment
                    </button>
                </div>

            </div>
        </div>
    )
}