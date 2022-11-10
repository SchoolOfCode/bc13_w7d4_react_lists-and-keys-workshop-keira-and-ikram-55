import React from 'react';

import './index.css';

function Post(props) {
  const post = props.post
  return <article>
    <h1>{post.title}</h1>
    <h2>{post.author}</h2>
    <p>{post.date}</p>
    <img src={post.image.link} alt={post.image.alt}/>
    <p>{post.text}</p>
  </article>;
}

export default Post;
