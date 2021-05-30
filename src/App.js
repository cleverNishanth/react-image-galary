import React, { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import Search from './components/Search'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [term])

  return (
    <div className='container mx-auto'>
      <Search searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className='lg:text-5xl md:text-3xl text-center mx-auto animate-bounce font-bold mt-64'>
          No Images Found
        </h1>
      )}

      {isLoading ? (
        <h1 className='text-6xl text-center mx-auto animate-bounce font-bold mt-32'>
          Loading...
        </h1>
      ) : (
        <div className='grid items-center justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
