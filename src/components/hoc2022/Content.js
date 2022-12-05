import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Content({title, statement}) {
  return (
    <div className='pt-16'>
      <div className='font-semibold text-3xl'>
        {title}
      </div>
      <div className='pt-6 prose lg:prose-xl'>
        {statement}
      </div>
    </div>
  )
}
