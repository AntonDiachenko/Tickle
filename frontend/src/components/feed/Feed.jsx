import "./feed.css";
import Share from "../share/Share.jsx";
import Post from "../post/Post.jsx";
//import {Posts} from "../../data.js"
//import { useEffect } from "react"
import axios from "../../utils/axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { useParams } from "react-router-dom";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { authState } = useContext(AuthContext);
  // const { user } = useContext(AuthContext);
  const userId = authState.userId;
  console.log("userId", userId);

  useEffect(() => {
    const fetchPosts = async () => {
      // TODO --> change posts from ALL user to posts by selected users and friends (must validate accesstoken here )
      // If there is a username in the props list the profile version of feed, otherwise list the homepage (timeline) version
      const res = username
        ? await axios.get("api/posts/profile/" + username)
        : await axios.get("api/posts/timeline/" + userId);
      // console.log(res)
      setPosts(res.data);
      // console.log(res.data);
    };
    fetchPosts();
  }, [username, userId]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("api/posts/timeline/" + userId);
  //     // console.log(res)
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, [userId]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {Array.from(posts).map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
