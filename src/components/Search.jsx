import React from 'react'
import { Search, Archive } from 'lucide-react'
import { useState } from 'react'


const Searchh = () => {

  const [searchValue,setSearchValue] = useState('')

  const changeSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const searchStart = () => {
    setSearchValue('')
  }
  return (
    <div className='search'>
        <Search className='searchicon'onClick={searchStart} />
        <div className='searchc' >
      <input type="text" placeholder='What do you want to play?' value={searchValue} onChange={(e) => {
        changeSearch(e)
      }}/>
      
      <Archive className='archive' />
      
      </div>
    </div>
  )
}

export default Searchh
