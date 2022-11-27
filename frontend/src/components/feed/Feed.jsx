import "./feed.css";
import Share from "../share/Share.jsx";
import Post from "../post/Post.jsx";
//import {Posts} from "../../data.js"
//import { useEffect } from "react"
import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // TODO --> change posts from ALL user to posts by selected users and friends (must validate accesstoken here )
      // If there is a username in the props list the profile version of feed, otherwise list the homepage (timeline) version
      const res = username
        ? await axios.get("api/posts/profile/" + username)
        : await axios.get("api/posts/timeline/:userId");
      // console.log(res)
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
