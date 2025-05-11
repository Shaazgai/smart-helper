import { Post, User } from "./types";

// Mock users
export const users: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    username: "alexj",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: "2",
    name: "Sam Wilson",
    username: "samw",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: "3",
    name: "Taylor Swift",
    username: "tswift",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: "4",
    name: "Jordan Lee",
    username: "jlee",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

// Current user (for creating posts and comments)
export const currentUser: User = users[0];

// Initial posts data
export const initialPosts: Post[] = [
  {
    id: "1",
    content: "Just had an amazing coffee at the new place downtown! ☕️ Highly recommend checking it out!",
    author: users[1],
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    likes: 24,
    liked: false,
    commentCount: 2,
    comments: [
      {
        id: "1",
        content: "I'll definitely check it out! Thanks for the recommendation.",
        author: users[2],
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
        likes: 3,
        liked: false,
      },
      {
        id: "2",
        content: "What's the name of the place?",
        author: users[3],
        createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
        likes: 1,
        liked: false,
      },
    ],
  },
  {
    id: "2",
    content: "Just launched my new portfolio website! It's been a long journey, but I'm really proud of the result. Check it out and let me know what you think! 🚀 #webdev #design",
    author: users[2],
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    likes: 56,
    liked: true,
    commentCount: 3,
    comments: [
      {
        id: "3",
        content: "Looks amazing! Love the design.",
        author: users[0],
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        likes: 7,
        liked: true,
      },
      {
        id: "4",
        content: "Great work! What technologies did you use?",
        author: users[3],
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
        likes: 2,
        liked: false,
      },
      {
        id: "5",
        content: "Can you share the link?",
        author: users[1],
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        likes: 1,
        liked: false,
      },
    ],
  },
  {
    id: "3",
    content: "Beautiful sunset at the beach today. Nature never fails to amaze me. 🌊 🌅",
    author: users[3],
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    likes: 102,
    liked: false,
    commentCount: 1,
    comments: [
      {
        id: "6",
        content: "Wow! Stunning view!",
        author: users[0],
        createdAt: new Date(Date.now() - 11 * 60 * 60 * 1000), // 11 hours ago
        likes: 4,
        liked: false,
      },
    ],
  },
];