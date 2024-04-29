import React from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata, ResolvingMetadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";
type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  if (!user) {
    return {
      title: "User Not Found!",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}
export async function generateStaticParams() {
  const allUsers: Promise<User[]> = getAllUsers();
  const users = await allUsers;
  return users.map((user) => {
    return { userId: user.id.toString() };
  });
}
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  // it is nextjs recommendation that we request data at the same time and do not await for
  //any one request
  const [user, userPosts] = await Promise.all([userData, userPostsData]);
  if (!user) {
    return notFound();
  }
  const content = (
    <>
      <h2> {user.name} </h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts posts={userPosts} />
      </Suspense>
    </>
  );
  return content;
}
