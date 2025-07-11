import React, { useState } from 'react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { cn } from '../lib/utils'

const categories = [
  'All',
  'Music',
  'Gaming',
  'Movies',
  'News',
  'Sports',
  'Technology',
  'Cooking',
  'Travel',
  'Education',
  'Comedy',
  'Entertainment',
  'Science',
  'Fashion',
  'Health',
  'DIY',
  'Animals',
  'Art'
]

export function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-2">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 px-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                selectedCategory === category
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}