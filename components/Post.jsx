import React from 'react'

export default function Post({ title, content, authorName }) {

  return (
    <div className=''>
      <div className='bg-black text-white border p-4 '>
        <h1 className='text-2xl font-bold'>
          {title}
        </h1>
        <p>
          {content}
        </p>
        <p>
          {authorName}
        </p>
      </div>
    </div>

  )
}
