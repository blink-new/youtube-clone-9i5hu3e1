import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { VideoWatch } from './pages/VideoWatch'
import { Upload } from './pages/Upload'
import { Search } from './pages/Search'
import { Channel } from './pages/Channel'
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
              <Route path="/watch/:id" element={<VideoWatch />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/search" element={<Search />} />
              <Route path="/channel/:id" element={<Channel />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App