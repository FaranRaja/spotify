import React from 'react'
import Playlists from './Playlists'

const Content = () => {


    const content = [
  {
    id: 1,
    type: "playlist",
    name: "Chill Vibes",
    cover: "https://i.pinimg.com/1200x/13/6a/ec/136aec859d9a9924e3181b439e47e320.jpg"
  },
  {
    id: 2,
    type: "playlist",
    name: "Top Hits 2026",
    cover: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80"
  },
  {
    id: 3,
    type: "playlist",
    name: "Workout Pump",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80"
  },
  {
    id: 4,
    type: "playlist",
    name: "Lo-Fi Beats",
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80"
  },
  {
    id: 5,
    type: "playlist",
    name: "Indie Discoveries",
    cover: "https://i.pinimg.com/736x/2a/ca/db/2acadba0f00baede9b7ae4eaa5db723b.jpg"
  },
  {
    id: 6,
    type: "playlist",
    name: "Evening Acoustic",
    cover: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80"
  },
  {
    id: 7,
    type: "playlist",
    name: "Party Time",
    cover: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80"
  },
  {
    id: 8,
    type: "album",
    name: "Midnight Memories",
    cover: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80"
  },
  {
    id: 9,
    type: "album",
    name: "Divide",
    cover: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80"
  }
];




  return (
    <div className='all-playlists'>
      {
        content.map((playlist,key) => {
            return <Playlists key = {key} name = {playlist.name} cover = {playlist.cover} type ={playlist.type} />
        })
      }
    </div>
  )
}

export default Content
