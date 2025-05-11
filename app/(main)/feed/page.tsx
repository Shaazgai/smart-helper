"use client";

import { useState } from 'react';
import { Post, Comment } from '@/lib/types';
import { initialPosts, currentUser } from '@/lib/feed-data';
import { PageHeader } from '@/components/shared/page-header';
import { CreatePost } from '@/components/feed/create-post';
import { PostCard } from '@/components/feed/post-card';

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  // Handle creating a new post
  const handleCreatePost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      content,
      author: currentUser,
      createdAt: new Date(),
      likes: 0,
      liked: false,
      comments: [],
      commentCount: 0,
    };

    setPosts([newPost, ...posts]);
  };

  // Handle liking a post
  const handleLikePost = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  // Handle adding a comment to a post
  const handleAddComment = (postId: string, content: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const newComment: Comment = {
            id: Date.now().toString(),
            content,
            author: currentUser,
            createdAt: new Date(),
            likes: 0,
            liked: false,
          };
          
          return {
            ...post,
            comments: [...post.comments, newComment],
            commentCount: post.commentCount + 1,
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <PageHeader /> */}
      
      <main className="container mx-auto max-w-2xl px-4 py-6">
        <h1 className="mb-6 text-2xl font-bold">Your Feed</h1>
        
        <section className="space-y-6">
          <CreatePost 
            currentUser={currentUser} 
            onCreatePost={handleCreatePost} 
          />
          
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              currentUser={currentUser}
              onLike={handleLikePost}
              onComment={handleAddComment}
            />
          ))}
          
          {posts.length === 0 && (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p className="text-muted-foreground">No posts yet. Create your first post!</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}