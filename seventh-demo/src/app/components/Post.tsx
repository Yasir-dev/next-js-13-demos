import React from "react";

type Props = {};

const wait = (ms: number) => new Promise((resole) => setTimeout(resole, ms));

const Post = async (props: Props) => {
  await wait(5000);
  return <div>Post</div>;
};

export default Post;
