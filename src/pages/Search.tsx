import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter } from 'lucide-react'
import VideoCard from '../components/VideoCard'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const searchResults = [
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
    title: 'React Advanced Concepts Explained',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    duration: '22:15',
    views: 89000,
    uploadTime: '1 week ago',
    channelName: 'React Mastery',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '3',
    title: 'Full Stack Development with React and Node.js',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
    duration: '35:40',
    views: 156000,
    uploadTime: '3 days ago',
    channelName: 'Full Stack Pro',
    channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
  }
]

export function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [sortBy, setSortBy] = useState('relevance')
  const [filterBy, setFilterBy] = useState('all')
  const [duration, setDuration] = useState('any')

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-gray-600 dark:text-gray-400">
            Results for "{query}" • {searchResults.length} videos
          </p>
        )}
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Sort by</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="upload_date">Upload date</SelectItem>
                  <SelectItem value="view_count">View count</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="channel">Channel</SelectItem>
                  <SelectItem value="playlist">Playlist</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Duration</label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="short">Under 4 minutes</SelectItem>
                  <SelectItem value="medium">4-20 minutes</SelectItem>
                  <SelectItem value="long">Over 20 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Upload date</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any time</SelectItem>
                  <SelectItem value="hour">Last hour</SelectItem>
                  <SelectItem value="day">Today</SelectItem>
                  <SelectItem value="week">This week</SelectItem>
                  <SelectItem value="month">This month</SelectItem>
                  <SelectItem value="year">This year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      <div className="space-y-4">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  )
}