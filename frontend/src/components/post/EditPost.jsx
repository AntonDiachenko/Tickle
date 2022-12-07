import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import { useParams } from "react-router";

export default function EditPost() {
  const [post, setPost] = useState({});
  const [content, setContent] = useState();
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      console.log("Update postId", postId);
      const res = await axios.get(`api/posts/${postId}`);
      console.log("Update res", res.data);
      setContent(res.data.content);
      setPost(res.data);
    };
    fetchPost();

    console.log("Update content", post.content);
  }, [postId]);

  const updatePost = (postId) => {
    axios
      .patch(
        `api/posts/${postId}`,
        {
          title: "default title",
          content: content,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then((response) => {
        setPost(response.data);
        window.location.reload();
      });
  };

  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {post.content}
              <br></br>
              <input
                value={content}
                type="text"
                className=""
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              />
            </td>
            <td>
              <button
                onClick={() => {
                  updatePost(postId);
                }}
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
