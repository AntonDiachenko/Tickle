import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import { useParams } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export default function EditPost() {
  const [post, setPost] = useState({});
  const [content, setContent] = useState();
  const { postId } = useParams();
  const [error, setError] = useState("");
  let navigate = useNavigate();


  const [fileSelected, setFileSelected] = useState([]);

  const onFileChange = (event) => {
    // capture file into state
    setFileSelected(event.target.files);
  };
  const formData = new FormData()


  formData.append('title', "default title");
    
  formData.append('content', content);
  for( var i =0; i< fileSelected.length;i++){
    formData.append("fileName", fileSelected[i])
  }



  useEffect(() => {
    const fetchPost = async () => {
      console.log("Update postId", postId);
      const res = await axios.get(`api/posts/${postId}`);
      console.log("Update res", res.data);
      setContent(res.data.content);
      setPost(res.data);
    }
    fetchPost();

    
    // console.log("Update content", post.content);
  }, [postId]);


  

  const updatePost = (postId) => {
   
    axios
      .patch(
        `api/posts/${postId}`,
        formData,
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then((response) => {
        if (response.data.message) {
          setError(response.data.message);
        } else {
          setPost(response.data);
          window.location.reload();
        }
        const urlList = post.imageURL;
        if (urlList.length > 0 && urlList[0] != "") {
        // divBool=true;
        const items =  urlList.map((value, key) => {
          return <div className="postPhotoGridItem"><img className="photoImg" src={value} alt="" /></div>
          {/* // return </div> */}
        }
        );
      } else {
        var items = <br></br>;
      }
      });

      navigate("/");
      
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
              {error && <span>{error}</span>}
              
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
            <div className="postPhotoGrid">
              {/* {items}  */}
              <br /></div>
            <input type="file"  accept="image/jpeg, image/png, image/jpg"  multiple="multiple" 
            onChange={onFileChange} 
            />
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
