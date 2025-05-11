"use client";

import { useState, useRef } from "react";
import { User } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ImageIcon, Smile } from "lucide-react";

interface CreatePostProps {
  currentUser: User;
  onCreatePost: (content: string) => void;
}

export function CreatePost({ currentUser, onCreatePost }: CreatePostProps) {
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onCreatePost(content);
      setContent("");
      setIsExpanded(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const expandTextarea = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-3">
          <Avatar className="h-10 w-10 border-2 border-primary/10">
            <img 
              src={currentUser.avatar}
              alt={currentUser.name}
              className="rounded-full object-cover"
            />
          </Avatar>
          <div className="flex-1 space-y-2">
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onClick={expandTextarea}
              onFocus={expandTextarea}
              onInput={handleTextareaInput}
              placeholder="What's on your mind?"
              className="min-h-[40px] w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              rows={isExpanded ? 3 : 1}
            />
            
            {isExpanded && (
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                    aria-label="Add image"
                  >
                    <ImageIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                    aria-label="Add emoji"
                  >
                    <Smile className="h-5 w-5" />
                  </button>
                </div>
                <Button type="submit" disabled={!content.trim()}>
                  Post
                </Button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}