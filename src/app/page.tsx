import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to BlogSpace
        </h1>
        <p className="text-gray-600 mb-6">
          Share your ideas, stories, and knowledge with the world. Create your first blog post now!
        </p>
        <Link href="/create-blog">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition">
            Create Blog
          </button>
        </Link>
        <Link href="/blogs">
          <button className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition">
            All Blogs
          </button>
        </Link>
      </div>
    </main>
  );
}
