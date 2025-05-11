"use client";

import { useRef, useState } from "react";
import { Comment, User } from "@/lib/types";
import { Avatar } from "@/components/ui/avatar";
import { formatTimeAgo } from "@/lib/feed-utils";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommentSectionProps {
  comments: Comment[];
  currentUser: User;
  onAddComment: (content: string) => void;
}

export function CommentSection({ comments, currentUser, onAddComment }: CommentSectionProps) {
  const [newComment, setNewComment] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="mt-4 border-t pt-4">
      <h4 className="mb-4 font-medium">Comments</h4>

      {/* Comment list */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <Avatar className="h-8 w-8 flex-shrink-0">
              <img 
                src={comment.author.avatar}
                alt={comment.author.name}
                className="rounded-full object-cover"
              />
            </Avatar>
            <div className="flex-1 rounded-lg bg-muted p-3">
              <div className="flex items-center justify-between">
                <div className="space-x-1">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-xs text-muted-foreground">
                    · {formatTimeAgo(comment.createdAt)}
                  </span>
                </div>
                <button 
                  className="group flex items-center space-x-1"
                  aria-label={comment.liked ? "Unlike comment" : "Like comment"}
                >
                  <Heart 
                    className={cn(
                      "h-4 w-4 transition-all", 
                      comment.liked 
                        ? "fill-red-500 text-red-500" 
                        : "group-hover:text-red-500"
                    )} 
                  />
                  <span className={cn(
                    "text-xs", 
                    comment.liked 
                      ? "text-red-500" 
                      : "text-muted-foreground group-hover:text-red-500"
                  )}>
                    {comment.likes}
                  </span>
                </button>
              </div>
              <p className="mt-1 text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add comment form */}
      <form onSubmit={handleSubmitComment} className="mt-4 flex space-x-3">
        <Avatar className="h-8 w-8 flex-shrink-0">
          <img 
            src={currentUser.avatar}
            alt={currentUser.name}
            className="rounded-full object-cover"
          />
        </Avatar>
        <div className="flex-1 space-y-2">
          <textarea
            ref={textareaRef}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onInput={handleTextareaInput}
            placeholder="Write a comment..."
            className="min-h-[40px] w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            rows={1}
          />
          <div className="flex justify-end">
            <Button 
              type="submit" 
              size="sm" 
              disabled={!newComment.trim()}
            >
              Post
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}