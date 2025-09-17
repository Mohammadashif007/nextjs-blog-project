// app/create-blog/page.tsx
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function CreateBlogPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-purple-500 py-10">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-6 transform transition duration-300 hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Create Your Blog</h1>

        <div className="space-y-5">
          <div>
            <Label htmlFor="title" className="text-lg font-medium">Title</Label>
            <Input id="title" placeholder="Enter blog title" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="description" className="text-lg font-medium">Description</Label>
            <Textarea id="description" placeholder="Enter blog description" className="mt-1 h-28" />
          </div>

          <div>
            <Label htmlFor="author" className="text-lg font-medium">Author</Label>
            <Input id="author" placeholder="Enter author name" className="mt-1" />
          </div>

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Submit
          </Button>
        </div>
      </div>
    </main>
  );
}
