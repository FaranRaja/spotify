import React from 'react'
import Artist from './Artist'

const Artists = () => {


    const artists = [
  {
    id: 1,
    name: "The Weeknd",
    image: "https://i.pinimg.com/1200x/94/a6/c9/94a6c97dbe731ed13e3bcf7e392f0960.jpg"
  },
  {
    id: 2,
    name: "Taylor Swift",
    image: "https://i.pinimg.com/1200x/5e/f6/4c/5ef64c137e646b87f0eda814430457fc.jpg"
  },
  {
    id: 3,
    name: "Drake",
    image: "https://i.pinimg.com/1200x/0b/a8/83/0ba883eb69938c0b57ba99f0763f8afd.jpg"
  },
  {
    id: 4,
    name: "Billie Eilish",
    image: "https://i.pinimg.com/1200x/24/8f/4a/248f4affc21def2e1e7b06d65864423f.jpg"
  },
  {
    id: 5,
    name: "Ed Sheeran",
    image: "https://i.pinimg.com/736x/0c/f5/28/0cf52855e2258c4f5c43f6e17344c835.jpg"
  },
  {
    id: 6,
    name: "Dua Lipa",
    image: "https://i.pinimg.com/736x/89/96/a5/8996a555deda294245f3307e2c0b9c8f.jpg"
  },
  {
    id: 7,
    name: "Kendrick Lamar",
    image: "https://i.pinimg.com/736x/8e/d9/07/8ed907f3fe74e761dc998fa7ff643a19.jpg"
  },
  {
    id: 8,
    name: "Ariana Grande",
    image: "https://i.pinimg.com/736x/91/7f/73/917f7342eccaa3d61209b3ab0676beeb.jpg"
  },
  {
    id: 9,
    name: "Harry Styles",
    image: "https://i.pinimg.com/736x/b2/fb/8a/b2fb8a616ac26f2521ff3b183f47ed84.jpg"
  }
];





  return (
    <div>
      


      <div className='artists-heading'>
        <h2>Popular Artists</h2>
        <span>Show all</span>

        </div>



         <div className='all-artists'>
            
            {artists.map((artist,key) => {
                return <Artist key={key} image={artist.image} name={artist.name} />
            }) 

            }
            
        </div>

    </div>
  )
}

export default Artists
