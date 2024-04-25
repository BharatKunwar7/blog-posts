

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;



  