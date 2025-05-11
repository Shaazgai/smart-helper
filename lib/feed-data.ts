import { Post, User } from "./types";

// Mock users
export const users: User[] = [
  {
    id: "1",
    name: "Төрбат",
    username: "",
    avatar: "/images/Avatar.png",
  },
  {
    id: "2",
    name: "Бишүбазар",
    username: "",
    avatar: "/images/Avatar.png",
  },
  {
    id: "3",
    name: "Мөнхжин",
    username: "tswift",
    avatar: "/images/Avatar.png",
  },
  {
    id: "4",
    name: "Батзориг",
    username: "jlee",
    avatar: "/images/Avatar.png",
  },
];

// Current user (for creating posts and comments)
export const currentUser: User = users[0];

// Initial posts data
export const initialPosts: Post[] = [
  {
    id: "1",
    content: "БЗД 36-р хороонд маш их нүх үүссэн байна. Эдгээр нь явган хүний замаар дугутай явахад асуудалтай байна.",
    author: users[1],
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    likes: 24,
    liked: false,
    commentCount: 2,
    comments: [
      {
        id: "1",
        content: "Ямар газар хандаж шийдүүлэх вэ?",
        author: users[2],
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
        likes: 3,
        liked: false,
      },
      {
        id: "2",
        content: "Холбогдох газар нь хандаж шийдвэрлүүлэхгүй бол манай ирээдүй болсон хүүхэд багачууд хохирч байна",
        author: users[3],
        createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
        likes: 1,
        liked: false,
      },
    ],
  },
  {
    id: "2",
    content: "Хороололд хог байнга цугларч байна",
    author: users[2],
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    likes: 56,
    liked: true,
    commentCount: 3,
    comments: [
      {
        id: "3",
        content: "Хавар болж байгаагч хэлэхүү хог арай байна.",
        author: users[0],
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        likes: 7,
        liked: true,
      },
      {
        id: "4",
        content: "Амьдрахад үнэхээр бэрх байна шүү",
        author: users[3],
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
        likes: 2,
        liked: false,
      },
      {
        id: "5",
        content: "Хогийн цэг юм уу!!",
        author: users[1],
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        likes: 1,
        liked: false,
      },
    ],
  },
];