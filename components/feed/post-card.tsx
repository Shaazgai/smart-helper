"use client";

import { Post, User } from "@/lib/types";
import { formatTimeAgo } from "@/lib/feed-utils";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { CommentSection } from "./comment-section";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  currentUser: User;
  onLike: (postId: string) => void;
  onComment: (postId: string, content: string) => void;
}

export function PostCard({ post, currentUser, onLike, onComment }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);

  const toggleLike = () => {
    onLike(post.id);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = (content: string) => {
    onComment(post.id, content);
  };

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Post Header */}
      <div className="flex items-start space-x-3">
        <Avatar className="h-10 w-10 border-2 border-primary/10">
          <img 
            src={post.author.avatar}
            alt={post.author.name}
            className="rounded-full object-cover"
          />
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{post.author.name}</h3>
              <p className="text-xs text-muted-foreground">
                @{post.author.username} · {formatTimeAgo(post.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="mt-3 space-y-4">
        <p className="whitespace-pre-line">{post.content}</p>
      </div>

      {/* Post Actions */}
      <div className="mt-4 flex justify-between border-t pt-3">
        <button 
          onClick={toggleLike}
          className="group flex items-center space-x-2"
          aria-label={post.liked ? "Unlike post" : "Like post"}
        >
          <Heart 
            className={cn(
              "h-5 w-5 transition-all", 
              post.liked 
                ? "fill-red-500 text-red-500 scale-110" 
                : "group-hover:text-red-500 group-hover:scale-110"
            )} 
          />
          <span className={cn(
            "text-sm", 
            post.liked 
              ? "text-red-500" 
              : "text-muted-foreground group-hover:text-red-500"
          )}>
            {post.likes}
          </span>
        </button>

        <button 
          onClick={toggleComments}
          className="group flex items-center space-x-2"
          aria-label={showComments ? "Hide comments" : "Show comments"}
        >
          <MessageCircle 
            className="h-5 w-5 group-hover:text-blue-500 group-hover:scale-110 transition-all" 
          />
          <span className="text-sm text-muted-foreground group-hover:text-blue-500">
            {post.commentCount}
          </span>
        </button>

        <button 
          className="group flex items-center space-x-2"
          aria-label="Share post"
        >
          <Share2 
            className="h-5 w-5 group-hover:text-green-500 group-hover:scale-110 transition-all" 
          />
          <span className="text-sm text-muted-foreground group-hover:text-green-500">
            Share
          </span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <CommentSection 
          comments={post.comments}
          currentUser={currentUser}
          onAddComment={handleAddComment}
        />
      )}
    </div>
  );
}