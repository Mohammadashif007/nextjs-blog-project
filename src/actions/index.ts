"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const deleteBlog = async (id: number) => {
    await prisma.posts.delete({ where: { id } });
    redirect("/blogs");
};
