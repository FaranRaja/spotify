import React from 'react'
import Song from './Song';

const Songs = () => {

    const songs = [
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/47/d5/67/47d5676e4e91a946b41bd8cd2e186dee.jpg",
    songName: "Blinding Lights",
    artist: "The Weeknd"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/e6/5f/0c/e65f0c6ede57573306205af9dd7a115c.jpg",
    songName: "Shape of You",
    artist: "Ed Sheeran"
  },
  {
    id: 3,
    image: "https://fordhamobserver.com/wp-content/uploads/2022/04/d98059a0f2afd10b04b912355c0e8ceb.1000x1000x1-900x900.png",
    songName: "As It Was",
    artist: "Harry Styles"
  },
  {
    id: 4,
    image: "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F4136ca8f6c03bd2fbc30c8d75407de75.1000x1000x1.png",
    songName: "Levitating",
    artist: "Dua Lipa"
  },
  {
    id: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/The_Weeknd_-_Starboy.png/250px-The_Weeknd_-_Starboy.png",
    songName: "Starboy",
    artist: "The Weeknd, Daft Punk"
  },
  {
    id: 6,
    image: "https://e.snmc.io/i/600/s/3b6e09a87c40d0ee495e02b2a9cdba03/6476107/kendrick-lamar-humble-Cover-Art.jpg",
    songName: "HUMBLE.",
    artist: "Kendrick Lamar"
  },

  {
    id: 6,
    image: "https://e.snmc.io/i/600/s/3b6e09a87c40d0ee495e02b2a9cdba03/6476107/kendrick-lamar-humble-Cover-Art.jpg",
    songName: "HUMBLE.",
    artist: "Kendrick Lamar"
  },
  {
    id: 6,
    image: "https://e.snmc.io/i/600/s/3b6e09a87c40d0ee495e02b2a9cdba03/6476107/kendrick-lamar-humble-Cover-Art.jpg",
    songName: "HUMBLE.",
    artist: "Kendrick Lamar"
  },

  
  
];



  return (

    <div className='songs-center'> 

        <div className='songs-heading'>
        <h2>Trending Songs</h2>
        <span>Show all</span>

        </div>

        <div className='all-songs'>
            
            {songs.map((songs,key) => {
                return <Song key={key} image={songs.image} songName={songs.songName} artist={songs.artist} />
            }) 

            }
            
        </div>
        
    </div>

        
       


        
      
  
  )
}

export default Songs
