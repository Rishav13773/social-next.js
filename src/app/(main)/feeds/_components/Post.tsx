import React from 'react'

const Post = () => {
  return (
    <div className="flex flex-col items-center w-full mb-5">
      <div className="flex flex-col w-fit`">
        <div className="flex flex-row w-full items-center justify-center mt-4">
          <div className="flex rounded-full w-fit p-5 text-center bg-purple-400">Image </div>
          <div className="flex rounded-2xl w-80 ml-4 text-2xl border-4 border-black-400 p-3 hover:bg-slate-300 hover:cursor-pointer">
            What's in your mind, User?
          </div>
        </div>
        <div className="flex flex-row w-full items-center justify-evenly mt-2">
          <div className="flex w-fit p-4 rounded-lg bg-blue-500 hover:cursor-pointer">Activity/Feeling</div>
          <div className="flex w-fit p-4 rounded-lg bg-purple-600 hover:cursor-pointer">Photo/Video</div>
          <div className="flex w-fit p-4 rounded-lg bg-green-400 hover:cursor-pointer">Achivement</div>
        </div>
      </div>
    </div>
  )
}

export default Post
