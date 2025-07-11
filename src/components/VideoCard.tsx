import { useNavigate } from 'react-router-dom'
import { MoreVertical } from 'lucide-react'
import { Button } from './ui/button'

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: number
  uploadTime: string
  channelName: string
  channelAvatar: string
}

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  const navigate = useNavigate()
  
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }
  
  const handleVideoClick = () => {
    navigate(`/watch?v=${video.id}`)
  }
  
  const handleChannelClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigate(`/channel/${video.channelName.toLowerCase().replace(/\s+/g, '-')}`)
  }
  return (
    <div className="group cursor-pointer" onClick={handleVideoClick}>
      <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-3">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="flex gap-3">
        <img
          src={video.channelAvatar}
          alt={video.channelName}
          className="w-9 h-9 rounded-full flex-shrink-0 cursor-pointer"
          onClick={handleChannelClick}
        />
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm text-gray-900 dark:text-white line-clamp-2 leading-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {video.title}
          </h3>
          
          <p 
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer"
            onClick={handleChannelClick}
          >
            {video.channelName}
          </p>
          
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span>{formatViews(video.views)} views</span>
            <span>•</span>
            <span>{video.uploadTime}</span>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation()
              // Handle menu click
            }}
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}