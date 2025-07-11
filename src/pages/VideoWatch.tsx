import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal, Bell, Flag } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Card, CardContent } from '../components/ui/card'
import { Textarea } from '../components/ui/textarea'
import { Separator } from '../components/ui/separator'
import VideoCard from '../components/VideoCard'

const sampleVideo = {
  id: '1',
  title: 'Building a Modern Video Platform with React',
  description: 'In this comprehensive tutorial, we will build a complete video sharing platform similar to YouTube using React, TypeScript, and modern web technologies. We will cover everything from the basic setup to advanced features like video upload, user authentication, and real-time comments.',
  views: 127000,
  likes: 12500,
  dislikes: 320,
  uploadTime: '2 days ago',
  channelName: 'Tech Tutorials',
  channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
  subscribers: 245000,
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
}

const sampleComments = [
  {
    id: '1',
    author: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    content: 'Great tutorial! Really helped me understand the concepts.',
    likes: 23,
    replies: 3,
    time: '2 hours ago'
  },
  {
    id: '2',
    author: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2e20d01?w=40&h=40&fit=crop&crop=face',
    content: 'Could you please make a follow-up video on advanced features?',
    likes: 15,
    replies: 1,
    time: '5 hours ago'
  }
]

const relatedVideos = [
  {
    id: '2',
    title: 'Advanced React Hooks Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    duration: '25:30',
    views: 89000,
    uploadTime: '1 week ago',
    channelName: 'React Mastery',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '3',
    title: 'TypeScript Best Practices',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
    duration: '18:45',
    views: 156000,
    uploadTime: '3 days ago',
    channelName: 'TypeScript Pro',
    channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
  }
]

export function VideoWatch() {
  const { id } = useParams()
  console.log('Video ID:', id) // Use the id parameter
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [newComment, setNewComment] = useState('')

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

  const handleSubscribe = () => {
    setSubscribed(!subscribed)
  }

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      // Add comment logic here
      console.log('Adding comment:', newComment)
      setNewComment('')
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Video Content */}
        <div className="lg:col-span-2">
          {/* Video Player */}
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
            <iframe
              src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0`}
              title={sampleVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Title */}
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {sampleVideo.title}
          </h1>

          {/* Video Stats and Actions */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{formatViews(sampleVideo.views)} views</span>
              <span>{sampleVideo.uploadTime}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={liked ? 'default' : 'outline'}
                size="sm"
                onClick={handleLike}
                className="flex items-center space-x-1"
              >
                <ThumbsUp className="w-4 h-4" />
                <span>{formatViews(sampleVideo.likes)}</span>
              </Button>
              
              <Button
                variant={disliked ? 'default' : 'outline'}
                size="sm"
                onClick={handleDislike}
                className="flex items-center space-x-1"
              >
                <ThumbsDown className="w-4 h-4" />
                <span>{formatViews(sampleVideo.dislikes)}</span>
              </Button>
              
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
              
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-1" />
                Download
              </Button>
              
              <Button variant="outline" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Separator />

          {/* Channel Info */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={sampleVideo.channelAvatar} alt={sampleVideo.channelName} />
                <AvatarFallback>{sampleVideo.channelName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {sampleVideo.channelName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formatViews(sampleVideo.subscribers)} subscribers
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={subscribed ? 'outline' : 'default'}
                onClick={handleSubscribe}
                className="flex items-center space-x-1"
              >
                <Bell className="w-4 h-4" />
                <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
              </Button>
            </div>
          </div>

          {/* Description */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                {showDescription ? (
                  <div>
                    <p className="whitespace-pre-wrap">{sampleVideo.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowDescription(false)}
                      className="mt-2 text-blue-600 hover:text-blue-800"
                    >
                      Show less
                    </Button>
                  </div>
                ) : (
                  <div>
                    <p className="line-clamp-3">{sampleVideo.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowDescription(true)}
                      className="mt-2 text-blue-600 hover:text-blue-800"
                    >
                      Show more
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Comments ({sampleComments.length})
            </h3>

            {/* Add Comment */}
            <div className="flex space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Your avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <Textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[60px] resize-none"
                />
                <div className="flex space-x-2">
                  <Button size="sm" onClick={handleCommentSubmit}>
                    Comment
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setNewComment('')}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {sampleComments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={comment.avatar} alt={comment.author} />
                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-sm text-gray-900 dark:text-white">
                        {comment.author}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      {comment.content}
                    </p>
                    <div className="flex items-center space-x-4 text-xs">
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        {comment.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <ThumbsDown className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        Reply
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Flag className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Videos Sidebar */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Related Videos
          </h3>
          <div className="space-y-3">
            {relatedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}