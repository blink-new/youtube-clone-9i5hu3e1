import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ThumbsUp, ThumbsDown, Share, Download, Flag, Eye } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Textarea } from '../components/ui/textarea'


const sampleVideo = {
  id: '1',
  title: 'Building a Modern Video Platform with React',
  description: 'In this comprehensive tutorial, we\'ll walk through building a complete video sharing platform using React, TypeScript, and modern web technologies. We\'ll cover everything from the user interface to video player implementation.',
  views: 127000,
  likes: 5200,
  dislikes: 87,
  uploadTime: '2 days ago',
  channelName: 'Tech Tutorials',
  channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
  subscribers: 85000,
  isSubscribed: false
}

const relatedVideos = [
  {
    id: '2',
    title: 'React State Management Best Practices',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
    duration: '18:45',
    views: 234000,
    uploadTime: '1 week ago',
    channelName: 'React Masters',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '3',
    title: 'TypeScript for React Developers',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
    duration: '25:30',
    views: 156000,
    uploadTime: '3 days ago',
    channelName: 'Code Academy',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b2e20d01?w=40&h=40&fit=crop&crop=face'
  }
]

const comments = [
  {
    id: '1',
    author: 'WebDev Pro',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    content: 'Great tutorial! The step-by-step approach makes it easy to follow along.',
    time: '2 hours ago',
    likes: 12
  },
  {
    id: '2',
    author: 'React Newbie',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    content: 'This helped me understand React hooks so much better. Thank you!',
    time: '5 hours ago',
    likes: 8
  }
]

export default function VideoPage() {
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v')
  const [isSubscribed, setIsSubscribed] = useState(sampleVideo.isSubscribed)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [comment, setComment] = useState('')

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

  const handleLike = () => {
    setLiked(!liked)
    if (disliked) setDisliked(false)
  }

  const handleDislike = () => {
    setDisliked(!disliked)
    if (liked) setLiked(false)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 max-w-7xl mx-auto">
      {/* Main Video Section */}
      <div className="flex-1 lg:max-w-4xl">
        {/* Video Player */}
        <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center">
          <div className="text-white text-center">
            <Eye className="h-16 w-16 mx-auto mb-2 opacity-50" />
            <p className="text-lg">Video Player</p>
            <p className="text-sm opacity-75">Video ID: {videoId}</p>
          </div>
        </div>

        {/* Video Info */}
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {sampleVideo.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{formatViews(sampleVideo.views)} views</span>
              <span>•</span>
              <span>{sampleVideo.uploadTime}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant={liked ? 'default' : 'outline'} 
                size="sm"
                onClick={handleLike}
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                {formatViews(sampleVideo.likes)}
              </Button>
              
              <Button 
                variant={disliked ? 'default' : 'outline'} 
                size="sm"
                onClick={handleDislike}
              >
                <ThumbsDown className="h-4 w-4 mr-1" />
                {sampleVideo.dislikes}
              </Button>
              
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-1" />
                Share
              </Button>
              
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
              
              <Button variant="outline" size="sm">
                <Flag className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Channel Info */}
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center space-x-3">
              <img 
                src={sampleVideo.channelAvatar} 
                alt={sampleVideo.channelName}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {sampleVideo.channelName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formatViews(sampleVideo.subscribers)} subscribers
                </p>
              </div>
            </div>
            
            <Button 
              variant={isSubscribed ? 'secondary' : 'default'}
              onClick={() => setIsSubscribed(!isSubscribed)}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </Button>
          </div>

          {/* Description */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {sampleVideo.description}
            </p>
          </div>

          {/* Comments Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Comments ({comments.length})
            </h3>
            
            {/* Add Comment */}
            <div className="space-y-2">
              <Textarea
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="resize-none"
              />
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm" onClick={() => setComment('')}>
                  Cancel
                </Button>
                <Button size="sm" disabled={!comment.trim()}>
                  Comment
                </Button>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <img 
                    src={comment.avatar} 
                    alt={comment.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm text-gray-900 dark:text-white">
                        {comment.author}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {comment.content}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {comment.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ThumbsDown className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Videos Sidebar */}
      <div className="lg:w-80">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Related Videos
        </h3>
        <div className="space-y-2">
          {relatedVideos.map((video) => (
            <div key={video.id} className="flex space-x-2">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-40 aspect-video object-cover rounded cursor-pointer hover:opacity-80"
                />
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm line-clamp-2 text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {video.channelName}
                </p>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mt-1">
                  <span>{formatViews(video.views)} views</span>
                  <span className="mx-1">•</span>
                  <span>{video.uploadTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}