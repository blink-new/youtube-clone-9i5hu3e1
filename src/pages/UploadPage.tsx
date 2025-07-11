import { useState } from 'react'
import { Upload, Video, Image, FileText, Eye } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function UploadPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [category, setCategory] = useState('')
  const [privacy, setPrivacy] = useState('public')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setVideoFile(file)
    }
  }

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setThumbnail(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!videoFile || !title.trim()) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  const categories = [
    'Education', 'Entertainment', 'Film & Animation', 'Gaming', 'Howto & Style',
    'Music', 'News & Politics', 'Science & Technology', 'Sports', 'Travel & Events'
  ]

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Upload Video
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Share your content with the Retube community
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Video Upload */}
              <div>
                <Label htmlFor="video-upload" className="block text-sm font-medium mb-2">
                  Video File *
                </Label>
                {!videoFile ? (
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                    <Video className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Drag and drop your video file here, or click to browse
                    </p>
                    <input
                      id="video-upload"
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('video-upload')?.click()}
                    >
                      Select Video
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Video className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {videoFile.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {(videoFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setVideoFile(null)}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>

              {/* Thumbnail Upload */}
              <div>
                <Label htmlFor="thumbnail-upload" className="block text-sm font-medium mb-2">
                  Thumbnail (Optional)
                </Label>
                {!thumbnail ? (
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                    <Image className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Upload a custom thumbnail
                    </p>
                    <input
                      id="thumbnail-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById('thumbnail-upload')?.click()}
                    >
                      Select Image
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Image className="h-6 w-6 text-green-600" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {thumbnail.name}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setThumbnail(null)}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>

              {/* Title */}
              <div>
                <Label htmlFor="title" className="block text-sm font-medium mb-2">
                  Title *
                </Label>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter video title"
                  maxLength={100}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {title.length}/100 characters
                </p>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="block text-sm font-medium mb-2">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell viewers about your video"
                  rows={4}
                  maxLength={5000}
                  className="w-full resize-none"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {description.length}/5000 characters
                </p>
              </div>

              {/* Tags */}
              <div>
                <Label htmlFor="tags" className="block text-sm font-medium mb-2">
                  Tags
                </Label>
                <Input
                  id="tags"
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Add tags separated by commas"
                  className="w-full"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Help people find your video
                </p>
              </div>

              {/* Category */}
              <div>
                <Label htmlFor="category" className="block text-sm font-medium mb-2">
                  Category
                </Label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Privacy */}
              <div>
                <Label className="block text-sm font-medium mb-2">
                  Privacy
                </Label>
                <div className="space-y-2">
                  {[
                    { value: 'public', label: 'Public', desc: 'Anyone can search for and view' },
                    { value: 'unlisted', label: 'Unlisted', desc: 'Anyone with the link can view' },
                    { value: 'private', label: 'Private', desc: 'Only you can view' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-start space-x-3">
                      <input
                        type="radio"
                        name="privacy"
                        value={option.value}
                        checked={privacy === option.value}
                        onChange={(e) => setPrivacy(e.target.value)}
                        className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {option.label}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {option.desc}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Upload Progress */}
              {isUploading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={!videoFile || !title.trim() || isUploading}
                className="w-full"
              >
                {isUploading ? 'Uploading...' : 'Upload Video'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Preview */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                {thumbnail ? (
                  <img
                    src={URL.createObjectURL(thumbnail)}
                    alt="Thumbnail preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <Video className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      No thumbnail selected
                    </p>
                  </div>
                )}
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2">
                {title || 'Video title will appear here'}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Your Channel • 0 views • Just now
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Upload Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Supported formats:</h4>
                <p className="text-gray-600 dark:text-gray-400">MP4, MOV, AVI, WMV, FLV, WebM</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Maximum file size:</h4>
                <p className="text-gray-600 dark:text-gray-400">256 GB or 12 hours</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Resolution:</h4>
                <p className="text-gray-600 dark:text-gray-400">Up to 8K (7680x4320)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}