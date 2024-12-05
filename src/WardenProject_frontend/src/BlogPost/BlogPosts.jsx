import React from "react";
import "./BlogPosts.scss";

const BlogPosts = () => {
  const posts = [
    {
      image: "/images/earth.jpg", // Direct path from the public folder
      title: "Unlocking the power of remote sensing for startups.",
    },
    {
      image: "/images/earthImage.jpg", // Direct path from the public folder
      title: "Satellite Imagery 101: How does it work?",
    },
    {
      image: "/images/satalite.jpg", // Direct path from the public folder
      title: "How AI is revolutionizing the remote sensing industry",
    },
    {
      image: "/images/earth.jpg", // Reuse the `earth` image
      title: "How AI is revolutionizing the remote sensing industry",
    },
  ];

  return (
    <div className="blog-posts">
      <h2 className="blog-posts-title">Blog posts.</h2>
      <div className="posts-container">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <img
              src={post.image} // Use the `image` field from the `posts` array
              alt={post.title} // Accessible alt text
              className="post-image"
            />
            <h3 className="post-title">{post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
