import React, { useState } from 'react'
import { Search, Bell, Video, Menu, User, Settings, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu'

interface HeaderProps {
  sidebarOpen: boolean
  onSidebarToggle: () => void
}

export function Header({ onSidebarToggle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <header className="flex items-center justify-between h-14 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      {/* Left Section - Logo and Menu */}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            RetTubr
          </span>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-2xl mx-4">
        <form onSubmit={handleSearch} className="flex">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 pr-12 py-2 border border-gray-300 dark:border-gray-600 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <Button
            type="submit"
            className="px-6 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
            variant="ghost"
          >
            <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </Button>
        </form>
      </div>

      {/* Right Section - User Actions */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Video className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Your Channel</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}