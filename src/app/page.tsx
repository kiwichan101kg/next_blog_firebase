"use client";
import { getPosts } from "./api";

export default async function Home() {
  const res = await getPosts();
  return <div>Home</div>;
}
