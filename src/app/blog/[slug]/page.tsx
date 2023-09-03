"use client";
import React, { useEffect } from "react";

type PostSlug = {
  params: { slug: string };
};

const page = async ({ params: { slug } }: PostSlug) => {
  console.log(slug);

  return <div>page</div>;
};

export default page;
