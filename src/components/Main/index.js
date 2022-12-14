import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  return <main id="main">
  {posts.map(post => 
  <Post post={post} key={post.postId}/>)}
  </main>;    
}

export default Main;
