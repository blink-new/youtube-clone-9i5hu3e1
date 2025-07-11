import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import VideoPage from './pages/VideoPage'
import UploadPage from './pages/UploadPage'
import SearchPage from './pages/SearchPage'
import ChannelPage from './pages/ChannelPage'
import { cn } from './lib/utils'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <Router>
      <div className="flex h-screen bg-white dark:bg-gray-900">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        {/* Main Content Area */}
        <div className={cn(
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          sidebarOpen ? "ml-64" : "ml-16"
        )}>
          {/* Header */}
          <Header 
            sidebarOpen={sidebarOpen}
            onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          />
          
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch" element={<VideoPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/channel/:id" element={<ChannelPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App