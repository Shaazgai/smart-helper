"use client";


import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export function PageHeader() {


  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">SocialFeed</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/feed" className="text-sm font-medium">
            Feed
          </Link>
          {/* <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">
              {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            </span>
          </button> */}
        </nav>
      </div>
    </header>
  );
}