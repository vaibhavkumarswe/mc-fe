import React from "react";

export default function Comment() {
  return (
    <div className="flex flex-col gap-4 border-l-2 border-gray-800">
      <div className="flex gap-4 pl-4">
        <p className="flex">This is the first comment</p>
        <div className="flex gap-2">
          <button className="flex text-blue-400">Reply</button>
          <button className="flex text-red-500">Delete</button>
        </div>
      </div>
      <div className="flex pl-4">
        <textarea
          name="comment"
          id="comment"
          className="h-26 w-[300px] border border-gray-300 rounded-md p-2"
        ></textarea>
        <div className="flex flex-col gap-2 ml-2">
          <button className="flex bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
          <button className="flex bg-gray-300 text-black px-4 py-2 rounded-md">
            Cancel-
          </button>
        </div>
      </div>
    </div>
  );
}
