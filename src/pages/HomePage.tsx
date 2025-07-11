import { useState } from 'react'
import VideoCard from '../components/VideoCard'
import { Button } from '../components/ui/button'

const categories = [
  'All', 'Gaming', 'Music', 'Movies', 'News', 'Sports', 'Technology', 
  'Fashion', 'Cooking', 'Travel', 'Comedy', 'Education', 'Fitness'
]

const sampleVideos = [
  {
    id: '1',
    title: 'Building a Modern Video Platform with React',
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop',
    duration: '15:32',
    views: 127000,
    uploadTime: '2 days ago',
    channelName: 'Tech Tutorials',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '2',
    title: 'Amazing Nature Documentary: Hidden Wonders',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop',
    duration: '45:18',
    views: 892000,
    uploadTime: '1 week ago',
    channelName: 'Nature Explorer',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '3',
    title: 'Cooking Masterclass: Perfect Pasta Every Time',
    thumbnail: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=225&fit=crop',
    duration: '12:45',
    views: 234000,
    uploadTime: '3 days ago',
    channelName: 'Chef\'s Kitchen',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b2e20d01?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '4',
    title: 'Latest Gaming News and Reviews',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop',
    duration: '18:20',
    views: 445000,
    uploadTime: '5 days ago',
    channelName: 'Gaming Central',
    channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '5',
    title: 'Travel Vlog: Exploring Tokyo Streets',
    thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=225&fit=crop',
    duration: '22:15',
    views: 678000,
    uploadTime: '1 day ago',
    channelName: 'World Wanderer',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '6',
    title: 'Fitness Routine: 30-Minute Full Body Workout',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
    duration: '31:40',
    views: 156000,
    uploadTime: '4 days ago',
    channelName: 'Fitness Pro',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '7',
    title: 'Latest Music Hits and Artist Interviews',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop',
    duration: '28:55',
    views: 789000,
    uploadTime: '6 days ago',
    channelName: 'Music Pulse',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b2e20d01?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '8',
    title: 'DIY Home Renovation on a Budget',
    thumbnail: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=225&fit=crop',
    duration: '35:12',
    views: 312000,
    uploadTime: '1 week ago',
    channelName: 'Home Improver',
    channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
  }
]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Categories */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'secondary'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sampleVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}