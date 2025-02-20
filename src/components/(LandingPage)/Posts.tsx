import React from 'react'
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useLiveReload } from "next-contentlayer/hooks";

const Posts = () => {

    useLiveReload();
      const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
      );
    console.log(posts)

  return (
    <div>Posts</div>
  )
}

export default Posts