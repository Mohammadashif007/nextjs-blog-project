import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";




export default async function BlogsPage() {

    const posts = await prisma.posts.findMany({});


  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">All Blogs</h1>
          <Link href="/create-blog">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              Add Blog
            </button>
          </Link>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <Link href={`/blogs/${post.id}`}>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-4 rounded-lg">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
