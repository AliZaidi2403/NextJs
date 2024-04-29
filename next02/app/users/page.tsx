import React from "react";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Users",
};
export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  const content = (
    <section>
      <h2>
        <Link href="/">Back To Home Page </Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
