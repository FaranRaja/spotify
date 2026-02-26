import React from 'react'
import { Minimize2, Plus } from 'lucide-react'

const Top = () => {
  return (
    <div className='side-top'>
        <h3>Your Library</h3>

        <div className='side-top-right'>
            <div className="left-top-round">
                <Plus />
            </div>

            <Minimize2 />
        </div>
      
    </div>
  )
}

export default Top
