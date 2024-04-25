import { useState } from 'react'


import BlogPostList from './components/BlogPostList';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Blog Post</h1>
      </header>
      <main>
        <BlogPostList />
      </main>
    </div>
  );
}

export default App;
