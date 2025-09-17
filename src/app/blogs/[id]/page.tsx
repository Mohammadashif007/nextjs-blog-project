import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";


export default async function BlogDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const blog = await prisma.posts.findUnique({ where: { id: Number(id) } });

    if(!blog) return <p>Blog not found</p>

    return (
        <main className="min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500 py-10 flex justify-center items-start">
            <div className="w-full max-w-3xl px-5">
                <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-2xl p-8">
                    <CardContent className="space-y-5">
                        <h1 className="text-3xl font-bold text-gray-800">
                            {blog.title}
                        </h1>
                        <p className="text-gray-700 text-lg">
                            {blog.description}
                        </p>
                        <p className="text-gray-500 font-medium">
                            Author: {blog.author}
                        </p>

                        <div className="flex gap-4 mt-6">
                            <Link href="/blogs">
                                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    Back to Blogs
                                </Button>
                            </Link>

                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Edit
                            </Button>

                            <Button
                                className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                // For now, just console.log; later connect to delete API
                            >
                                Delete
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
