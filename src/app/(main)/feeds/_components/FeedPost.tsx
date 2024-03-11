import React from 'react'

const FeedPost = () => {
  return (
    <div className="flex flex-col items-center w-full mb-5">
    <div className='flex flex-col items-center justify-center w-full bg-blue-400 rounded-md'>
      <div className='flex items-center justify-center bg-purple-400 p-60 rounded-lg'></div>
      <div className='flex flex-row items-center justify-around gap-4 m-2'>
        <div className='flex w-fit p-3 rounded-lg bg-slate-400 text-center font-semibold hover:cursor-pointer hover:underline hover:scale-125'>Like</div>
        <div className='flex w-fit p-3 rounded-lg bg-slate-400 text-center font-semibold hover:cursor-pointer hover:underline hover:scale-125'>Comment</div>
        <div className='flex w-fit p-3 rounded-lg bg-slate-400 text-center font-semibold hover:cursor-pointer hover:underline hover:scale-125'>Share</div>
      </div>
      <div className="text-left">
        likes or views
      </div>
      <div className="text-left">
        comments
      </div>
    </div>
  </div>
  )
}

export default FeedPost
