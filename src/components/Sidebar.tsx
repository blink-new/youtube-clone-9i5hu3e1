import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Home, 
  TrendingUp, 
  Music, 
  Film, 
  Gamepad2, 
  Newspaper, 
  Trophy, 
  Lightbulb,
  Settings,
  HelpCircle,
  Flag,
  History,
  PlaySquare,
  Clock,
  ThumbsUp,
  Download,
  User
} from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const mainMenuItems = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Trending', icon: TrendingUp, path: '/trending' },
  { name: 'Subscriptions', icon: PlaySquare, path: '/subscriptions' },
]

const libraryItems = [
  { name: 'Library', icon: User, path: '/library' },
  { name: 'History', icon: History, path: '/history' },
  { name: 'Your Videos', icon: PlaySquare, path: '/your-videos' },
  { name: 'Watch Later', icon: Clock, path: '/watch-later' },
  { name: 'Liked Videos', icon: ThumbsUp, path: '/liked' },
  { name: 'Downloads', icon: Download, path: '/downloads' },
]

const exploreItems = [
  { name: 'Music', icon: Music, path: '/music' },
  { name: 'Movies', icon: Film, path: '/movies' },
  { name: 'Gaming', icon: Gamepad2, path: '/gaming' },
  { name: 'News', icon: Newspaper, path: '/news' },
  { name: 'Sports', icon: Trophy, path: '/sports' },
  { name: 'Learning', icon: Lightbulb, path: '/learning' },
]

const moreItems = [
  { name: 'Settings', icon: Settings, path: '/settings' },
  { name: 'Report History', icon: Flag, path: '/report' },
  { name: 'Help', icon: HelpCircle, path: '/help' },
]

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const SidebarItem = ({ 
    item, 
    collapsed = false 
  }: { 
    item: { name: string; icon: React.ComponentType<{ className?: string }>; path: string }
    collapsed?: boolean 
  }) => (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          isActive 
            ? "bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400" 
            : "text-gray-700 dark:text-gray-300",
          collapsed ? "justify-center px-2" : "justify-start"
        )
      }
    >
      <item.icon className={cn("h-5 w-5", collapsed ? "flex-shrink-0" : "")} />
      {!collapsed && <span>{item.name}</span>}
    </NavLink>
  )

  return (
    <div className={cn(
      "fixed left-0 top-0 z-40 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="flex flex-col h-full">
        {/* Header Space */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
          {isOpen && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                RetTubr
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hidden lg:flex"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className="w-4 h-0.5 bg-current mb-1"></div>
              <div className="w-4 h-0.5 bg-current mb-1"></div>
              <div className="w-4 h-0.5 bg-current"></div>
            </div>
          </Button>
        </div>

        {/* Main Content */}
        <ScrollArea className="flex-1 px-2">
          <div className="py-4 space-y-4">
            {/* Main Menu */}
            <div className="space-y-1">
              {mainMenuItems.map((item) => (
                <SidebarItem key={item.name} item={item} collapsed={!isOpen} />
              ))}
            </div>

            <Separator />

            {/* Library */}
            {isOpen && (
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Library
                </div>
                {libraryItems.map((item) => (
                  <SidebarItem key={item.name} item={item} />
                ))}
              </div>
            )}

            <Separator />

            {/* Explore */}
            <div className="space-y-1">
              {isOpen && (
                <div className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Explore
                </div>
              )}
              {exploreItems.map((item) => (
                <SidebarItem key={item.name} item={item} collapsed={!isOpen} />
              ))}
            </div>

            <Separator />

            {/* More */}
            <div className="space-y-1">
              {moreItems.map((item) => (
                <SidebarItem key={item.name} item={item} collapsed={!isOpen} />
              ))}
            </div>
          </div>
        </ScrollArea>

        {/* Footer */}
        {isOpen && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 RetTubr
            </div>
          </div>
        )}
      </div>
    </div>
  )
}