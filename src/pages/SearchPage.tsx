import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { SlidersHorizontal } from 'lucide-react'

const searchResults = [
  {
    id: '1',
    title: 'React Tutorial for Beginners - Complete Course',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    duration: '3:45:20',
    views: 1200000,
    uploadTime: '2 weeks ago',
    channelName: 'Code Academy',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '2',
    title: 'Advanced React Patterns and Performance',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
    duration: '45:32',
    views: 450000,
    uploadTime: '1 week ago',
    channelName: 'React Masters',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '3',
    title: 'Building React Apps with TypeScript',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
    duration: '28:15',
    views: 234000,
    uploadTime: '3 days ago',
    channelName: 'TypeScript Pro',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b2e20d01?w=40&h=40&fit=crop&crop=face'
  }
]

const filters = [
  { label: 'Upload date', options: ['Last hour', 'Today', 'This week', 'This month', 'This year'] },
  { label: 'Duration', options: ['Under 4 minutes', '4-20 minutes', 'Over 20 minutes'] },
  { label: 'Sort by', options: ['Relevance', 'Upload date', 'View count', 'Rating'] }
]

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string}>({})

  useEffect(() => {
    const query = searchParams.get('q')
    if (query) {
      setSearchQuery(query)
    }
  }, [searchParams])

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const clearFilters = () => {
    setSelectedFilters({})
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Search Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-medium text-gray-900 dark:text-white">
            Search results for "{searchQuery}"
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          About {searchResults.length} results
        </p>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-gray-900 dark:text-white">Filter results</h2>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear all
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filters.map((filter) => (
              <div key={filter.label} className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {filter.label}
                </h3>
                <div className="space-y-1">
                  {filter.options.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={filter.label}
                        value={option}
                        checked={selectedFilters[filter.label] === option}
                        onChange={() => handleFilterChange(filter.label, option)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      <div className="space-y-4">
        {searchResults.map((video) => (
          <div key={video.id} className="flex flex-col sm:flex-row gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
            <div className="relative sm:w-80 flex-shrink-0">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full aspect-video object-cover rounded-lg cursor-pointer hover:opacity-80"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            
            <div className="flex-1 space-y-2">
              <h3 className="font-medium text-lg line-clamp-2 text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                {video.title}
              </h3>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span>{(video.views / 1000000).toFixed(1)}M views</span>
                <span className="mx-1">•</span>
                <span>{video.uploadTime}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={video.channelAvatar} 
                  alt={video.channelName}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white">
                  {video.channelName}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                Learn React from scratch with this comprehensive tutorial covering all the fundamentals and advanced concepts you need to know.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}