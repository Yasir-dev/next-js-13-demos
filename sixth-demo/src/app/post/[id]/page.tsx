import { Metadata } from "next";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      title: post.title,
    },
  };
}

const page = () => {
  return <div>Post 1 page</div>;
};

export default page;
