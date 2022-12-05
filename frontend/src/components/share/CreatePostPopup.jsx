import "./createpostpopup.css";
//import React from "react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../utils/AuthContext.js";
import axios from "../../utils/axios";
import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
import AddToYourPost from "./AddToYourPost";

export default function CreatePostPopup({ user, setVisible }) {
  const { authState } = useContext(AuthContext);
  //console.log("usershare", authState.userId);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [content, setContent] = useState("");
  const contentRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    // const newPost = {
    //   //   userId: authState.userId,
    //   title: "aaa",
    //   content: content.current.value,
    // };

    // if (file) {
    //     const data = new FormData();
    //     const fileName = Date.now() + file.name;
    //     data.append("name", fileName);
    //     data.append("file", file);
    //     newPost.img = fileName;
    //     console.log(newPost);
    //     try {
    //       await axios.post("/upload", data);
    //     } catch (err) {}
    //   }
    try {
      await axios.post(
        "api/posts/",
        {
          title: "default title",
          content: contentRef.current.value,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
        // newPost
      );
      //  console.log("api/posts");
      window.location.reload();
    } catch (err) {}
  };

  // console.log("content", content);
  return (
    <div className="blur">
      <div className="postBox">
        <div className="box_header">
          <div className="small_circle" onClick={() => setVisible(false)}>
            <i className="exit_icon"></i>
            <img src="/assets/post/close.png" alt="" />
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img
            src={authState.avatarURL || PF + "person/avatar1.jpg"}
            alt=""
            className="box_profile_img"
          />
          <div className="box_col">
            <div className="box_profile_name">{authState.username}</div>
            <div className="box_privacy">
              <span>Public</span>
            </div>
          </div>
        </div>
        <div className="flex_center">
          <textarea
            ref={contentRef}
            maxlength="100"
            value={content}
            placeholder={"What's on your mind " + authState.username + "?"}
            className="post_input"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <EmojiPickerBackgrounds
          content={content}
          contentRef={contentRef}
          setContent={setContent}
        />
        <AddToYourPost />
        <form onSubmit={submitHandler}>
          <button className="post_submit" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
