import React from 'react'
import FeaturedPosters from './FeaturedPosters'
import MovieCard from './MovieCard'

export default function SingleMovie() {
  return (
    <div className='container'>
      <FeaturedPosters />
      <h1 className='pt-4'>Available Theatres</h1>
      <div className='row'>
        <MovieCard title='A Theater' rating='5' />
        <MovieCard title='B Theater' rating='3' />
        <MovieCard title='C Theater' rating='2.0' />
        <MovieCard title='D Theater' rating='1.5' />
      </div>
    </div>
  )
}
