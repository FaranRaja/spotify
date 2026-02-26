import React from 'react'
import { Search } from 'lucide-react'
import { Menu } from 'lucide-react'

const Filters = () => {
  return (
    <div className='filters'>
        <div className="search-filter">
                <Search className='filter-search'/>
        </div>
      
      <div className='filters-right'>
        Recents 
        <Menu />
      </div>
    </div>
  )
}

export default Filters
