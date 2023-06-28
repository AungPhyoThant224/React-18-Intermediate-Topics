import { useState } from "react";
import usePost from "./hooks/usePost";
import React from "react";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePost({ pageSize });

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading......</p>;

  return (
    <>
      <ul className="list-group">
        {posts.pages.map((posts, index) => (
          <React.Fragment key={index}>
            {posts?.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className="btn btn-primary my-3"
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
