"use client";
import React from "react";
import SearchBar from "./_components/SearchBar";
import Post from "./_components/Post";
import FeedPost from "./_components/FeedPost";

const Feeds = () => {


  return (
    <div className="flex flex-col items-center w-full gap-4">
      <SearchBar/>
      <Post/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
    </div>
  );
};

export default Feeds;
Feeds;
