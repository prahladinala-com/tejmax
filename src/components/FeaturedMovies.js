import React from 'react'
import MovieCard from './MovieCard'
export default function FeaturedMovies() {
  return (
    <div className='container pt-4'>
      <h1>Featured Movies</h1>
      <div className='row'>
        <MovieCard title='Joker' rating='5' />
        <MovieCard title='Avengers' rating='3' />
        <MovieCard title='Avatar' rating='2.0' />
        <MovieCard title='ABS' rating='1.5' />
      </div>
    </div>
  )
}
