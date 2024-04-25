import React from 'react'
const BlogPost = ({ post }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default BlogPost;