import React from 'react'
import { Link } from 'react-router-dom'
import { MoreVertical } from 'lucide-react'
import { Button } from './ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu'

interface Video {
  id: string
  title: string
  thumbnail: string
  channel: string
  channelAvatar: string
  views: string
  uploadTime: string
  duration: string
}

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <Link to={`/watch/${video.id}`}>
        <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>
      </Link>
      
      <div className="mt-3 flex gap-3">
        <Link to={`/channel/${video.channel}`}>
          <img
            src={video.channelAvatar}
            alt={video.channel}
            className="w-9 h-9 rounded-full flex-shrink-0"
          />
        </Link>
        
        <div className="flex-1 min-w-0">
          <Link to={`/watch/${video.id}`}>
            <h3 className="font-medium text-sm text-gray-900 dark:text-white line-clamp-2 leading-tight mb-1">
              {video.title}
            </h3>
          </Link>
          
          <Link to={`/channel/${video.channel}`}>
            <p className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              {video.channel}
            </p>
          </Link>
          
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.uploadTime}</span>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Add to queue</DropdownMenuItem>
              <DropdownMenuItem>Save to Watch later</DropdownMenuItem>
              <DropdownMenuItem>Save to playlist</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Not interested</DropdownMenuItem>
              <DropdownMenuItem>Don't recommend channel</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}