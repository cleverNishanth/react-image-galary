import React, { useState } from 'react'

const Search = ({ searchText }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    searchText(text)
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
          <input
            autoFocus
            onChange={(e) => setText(e.target.value)}
            className='appearance-none bg-transparent border-none w-full text-gray700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            type='text'
            placeholder='Search Here...'
          />
          <button
            className='flex-shrink-0 bg-green-300 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py1 px-2 rounded transition-all duration-300'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search
