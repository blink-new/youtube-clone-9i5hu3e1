import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import VideoCard from '../components/VideoCard'
import { Bell, Share, Search } from 'lucide-react'

const channelData = {
  id: 'tech-tutorials',
  name: 'Tech Tutorials',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
  banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=300&fit=crop',
  subscribers: 850000,
  videos: 234,
  description: 'Welcome to Tech Tutorials! We create comprehensive programming tutorials, tech reviews, and coding tips for developers of all skill levels. Subscribe for weekly content on React, JavaScript, Python, and more!',
  isSubscribed: false,
  isVerified: true,
  joinDate: 'Jan 15, 2020',
  totalViews: 12500000,
  location: 'United States'
}

const channelVideos = [
  {
    id: '1',
    title: 'React Hooks Complete Guide - useState, useEffect, and More',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    duration: '45:32',
    views: 234000,
    uploadTime: '2 days ago',
    channelName: 'Tech Tutorials',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '2',
    title: 'JavaScript ES6+ Features You Need to Know',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
    duration: '38:15',
    views: 456000,
    uploadTime: '1 week ago',
    channelName: 'Tech Tutorials',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '3',
    title: 'Building a Full-Stack App with Node.js and MongoDB',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
    duration: '1:12:45',
    views: 678000,
    uploadTime: '2 weeks ago',
    channelName: 'Tech Tutorials',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '4',
    title: 'CSS Grid Layout Tutorial - Complete Guide',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop',
    duration: '28:20',
    views: 189000,
    uploadTime: '3 weeks ago',
    channelName: 'Tech Tutorials',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  }
]

const playlists = [
  {
    id: '1',
    title: 'React Tutorial Series',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    videoCount: 15,
    views: 450000
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
    videoCount: 22,
    views: 680000
  }
]

export default function ChannelPage() {
  const { id } = useParams()
  console.log('Channel ID:', id) // Channel ID from URL
  const [isSubscribed, setIsSubscribed] = useState(channelData.isSubscribed)
  const [activeTab, setActiveTab] = useState('videos')

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Channel Banner */}
      <div className="relative h-48 md:h-64 lg:h-80 mb-4">
        <img
          src={channelData.banner}
          alt={`${channelData.name} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Channel Header */}
      <div className="px-4 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img
            src={channelData.avatar}
            alt={channelData.name}
            className="w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-gray-800"
          />
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {channelData.name}
              </h1>
              {channelData.isVerified && (
                <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>@{channelData.id}</span>
              <span>•</span>
              <span>{formatNumber(channelData.subscribers)} subscribers</span>
              <span>•</span>
              <span>{channelData.videos} videos</span>
              <span>•</span>
              <span>{formatNumber(channelData.totalViews)} views</span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
              {channelData.description}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={isSubscribed ? 'secondary' : 'default'}
              onClick={() => setIsSubscribed(!isSubscribed)}
              className="flex items-center gap-2"
            >
              {isSubscribed ? (
                <>
                  <Bell className="h-4 w-4" />
                  Subscribed
                </>
              ) : (
                'Subscribe'
              )}
            </Button>
            <Button variant="outline" size="icon">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Channel Navigation */}
      <div className="px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:inline-flex">
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="shorts">Shorts</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Latest Videos
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <select className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm">
                  <option>Latest</option>
                  <option>Popular</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {channelVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="playlists" className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Playlists
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {playlists.map((playlist) => (
                <div key={playlist.id} className="group cursor-pointer">
                  <div className="relative mb-3">
                    <img
                      src={playlist.thumbnail}
                      alt={playlist.title}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold">{playlist.videoCount}</div>
                        <div className="text-sm">videos</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {playlist.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatNumber(playlist.views)} views
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="shorts" className="mt-6">
            <div className="text-center py-12">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No Shorts Yet
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                This channel hasn't posted any Shorts videos yet.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="about" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {channelData.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Channel Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Joined:</span>
                      <span className="text-gray-900 dark:text-white">{channelData.joinDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Location:</span>
                      <span className="text-gray-900 dark:text-white">{channelData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total views:</span>
                      <span className="text-gray-900 dark:text-white">{formatNumber(channelData.totalViews)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {formatNumber(channelData.subscribers)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Subscribers
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {channelData.videos}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Videos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}