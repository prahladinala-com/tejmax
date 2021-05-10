import React from 'react'

import FeaturedPosters from './FeaturedPosters'
import MovieCard from './MovieCard'

export default function SingleTheatre() {
  return (
    <div className='container'>
      <div className='container'>
        <FeaturedPosters />
        <h1 className='pt-4'>Available Films</h1>
        <div className='row'>
          <MovieCard title='A Film' rating='5' />
          <MovieCard title='B Film' rating='3' />
          <MovieCard title='C Film' rating='2.0' />
          <MovieCard title='D Film' rating='1.5' />
        </div>
      </div>
    </div>
  )
}
