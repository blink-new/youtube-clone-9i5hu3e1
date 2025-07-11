import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Bell, Share2, MoreHorizontal, Play, Users, Video } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Card, CardContent } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Badge } from '../components/ui/badge'
import VideoCard from '../components/VideoCard'

const channelData = {
  id: '1',
  name: 'Tech Tutorials',
  handle: '@techtutorials',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
  banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=300&fit=crop',
  subscribers: 245000,
  videos: 127,
  views: 12500000,
  description: 'Welcome to Tech Tutorials! We create comprehensive programming tutorials, web development guides, and tech reviews. Join our community of developers and stay updated with the latest in technology.',
  joinDate: 'Jan 2020',
  verified: true
}

const channelVideos = [
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
    title: 'Advanced React Hooks Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    duration: '25:30',
    views: 89000,
    uploadTime: '1 week ago',
    channelName: 'Tech Tutorials',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '3',
    title: 'TypeScript Best Practices',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
    duration: '18:45',
    views: 156000,
    uploadTime: '3 days ago',
    channelName: 'Tech Tutorials',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  }
]

const playlists = [
  {
    id: '1',
    title: 'React Complete Course',
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop',
    videoCount: 24,
    lastUpdated: '2 days ago'
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop',
    videoCount: 18,
    lastUpdated: '1 week ago'
  }
]

export function Channel() {
  const { id } = useParams()
  console.log('Channel ID:', id) // Use the id parameter
  const [subscribed, setSubscribed] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  const handleSubscribe = () => {
    setSubscribed(!subscribed)
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Channel Banner */}
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <img
          src={channelData.banner}
          alt={channelData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Channel Header */}
      <div className="px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20 md:w-24 md:h-24">
              <AvatarImage src={channelData.avatar} alt={channelData.name} />
              <AvatarFallback className="text-2xl">{channelData.name[0]}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {channelData.name}
                </h1>
                {channelData.verified && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {channelData.handle}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {formatCount(channelData.subscribers)} subscribers
                </span>
                <span className="flex items-center">
                  <Video className="w-4 h-4 mr-1" />
                  {channelData.videos} videos
                </span>
                <span className="flex items-center">
                  <Play className="w-4 h-4 mr-1" />
                  {formatCount(channelData.views)} views
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={subscribed ? 'outline' : 'default'}
              onClick={handleSubscribe}
              className="flex items-center space-x-2"
            >
              <Bell className="w-4 h-4" />
              <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Channel Description */}
        <div className="mt-6 max-w-4xl">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                {showFullDescription ? (
                  <div>
                    <p className="whitespace-pre-wrap mb-4">{channelData.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <span>Joined {channelData.joinDate}</span>
                      <span>•</span>
                      <span>{formatCount(channelData.views)} views</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowFullDescription(false)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Show less
                    </Button>
                  </div>
                ) : (
                  <div>
                    <p className="line-clamp-2 mb-2">{channelData.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowFullDescription(true)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Show more
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Channel Content */}
      <div className="px-4 pb-8">
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="shorts">Shorts</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {channelVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="playlists" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {playlists.map((playlist) => (
                <Card key={playlist.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-t-lg overflow-hidden">
                      <img
                        src={playlist.thumbnail}
                        alt={playlist.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {playlist.videoCount} videos
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm line-clamp-2 text-gray-900 dark:text-white">
                        {playlist.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Updated {playlist.lastUpdated}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shorts" className="mt-6">
            <div className="text-center py-12">
              <Video className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No Shorts yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This channel hasn't uploaded any Shorts
              </p>
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="max-w-4xl space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Channel Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Stats</h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex justify-between">
                          <span>Joined</span>
                          <span>{channelData.joinDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total views</span>
                          <span>{formatCount(channelData.views)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Subscribers</span>
                          <span>{formatCount(channelData.subscribers)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Videos</span>
                          <span>{channelData.videos}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Description</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                        {channelData.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}