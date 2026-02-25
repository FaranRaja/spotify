import React from 'react'
import { Search, Archive } from 'lucide-react'

const Searchh = () => {
  return (
    <div className='search'>
        <Search />
        <div className='searchc'>
      <input type="text" placeholder='What do you want to play?'/>
      
      <Archive />
      
      </div>
    </div>
  )
}

export default Searchh
