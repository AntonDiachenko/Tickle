import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import { useParams } from "react-router";
import "../register/register.css";
import { AuthContext } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./myProfile.css"
import TextArea from "rc-textarea";
export default function MyProfile() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  const { userId } = useParams();

  // const { authState } = useContext(AuthContext);
  // const userId= authState.userId;

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [password, setPassword] = useState("");
  const [avatarURL, setAvatarURL] = useState();
  const [city, setCity] = useState();
  const [from, setFrom] = useState();
  const [birthday, setBirthday] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users?userId=${userId}`);
      setUsername(res.data.username);
      setCity(res.data.city);
      setFrom(res.data.from);
      setBirthday(res.data.birthday);
      setDesc(res.data.desc);
      setPassword(res.data.password);
      //console.log(res)
      setUser(res.data);
    };
    //console.log("User in useEffect :", user);
    //window.location.reload();
    fetchUser();
  }, [userId]);

  const updateMyInfo = (userId) => {
    axios
      .patch(
        `users/update/${userId}`,
        {
          // role: role.current,
          // avatarURL: avatarURL.current,
          username: username,
          //email: email,
          //  password: password.current,
          city: city,
          from: from,
          birthday: birthday,
          desc: desc,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then((response) => {
        setUser(response.data);
        window.location.reload();
        // navigate("/");
      });
  };

  const deleteMyAccount = (userId) => {
    axios
      .delete(`users/delete/${userId}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        navigate("/");
      });
  };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().min(2).max(20).required(),
//     // email: Yup.string().email().required(),
//     // password: Yup.string().min(5).max(20).required(),
//     // confirmpassword: Yup.string()
//     //   .required()
//     //   .oneOf([Yup.ref("password")], "Your passwords do not match."),
//     // role: Yup.string(),
//     //avatarURL: Yup.string(),
//     city: Yup.string().min(2).max(50).required(),
//     from: Yup.string().min(2, "it should be longer").required(),
//     birthday: Yup.date().required(),
//     desc: Yup.string().min(2).max(550).required(),
//   });

  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <div className="myProfileContainer">
    <h3 className="friendTitle">Edit profile</h3>
    <hr></hr>
    <div className="profileItems">
        
              {/* <h3 className="loginLogo">tickle</h3>
          <span className="loginDesc">
            Tickle your friends via the app so you don't have to get off your
            couch while watching Netflix.
          </span> */}
                <Formik
                  // initialValues={initialValues}
                  // onSubmit={onSubmit}
                 // validationSchema={validationSchema}
                >
                  <Form className="myProfileForm">
                    <span className="myProfileSpan">User name: </span>
                    <div>
                        
                      <ErrorMessage
                        className="RegisterError"
                        name="username"
                        component="span"
                      />
                      <Field
                        className="myProfileInput"
                        name="username"
                        placeholder="User name"
                        value={username}
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                    </div>
<span className="myProfileSpan" >City</span>
                    <div>
                      
                      {/* <Field
                        className="loginInput"
                        name="avatarURL"
                        placeholder="avatarURL"
                        hidden
                      />
                    </div>
                    <div>
                    <label>City:</label>
                      <ErrorMessage
                        className="RegisterError"
                        name="city"
                        component="span"
                      /> */}

                      <Field
                        className="myProfileInput"
                        name="city"
                        placeholder="City"
                        value={city}
                        onChange={(event) => {
                          setCity(event.target.value);
                        }}
                      />
                    </div>
                    
                    
<span className="myProfileSpan">From</span>

                    <div>
                      <ErrorMessage
                        className="RegisterError"
                        name="from"
                        component="span"
                      />
                      <Field
                        className="myProfileInput"
                        name="from"
                        placeholder="From"
                        value={from}
                        onChange={(event) => {
                          setFrom(event.target.value);
                        }}
                      />
                    </div>
<span className="myProfileSpan">Birthday</span>
                    <div>
                      <ErrorMessage
                        className="RegisterError"
                        name="birthday"
                        component="span"
                      />
                      <Field
                        className="myProfileInput"
                        name="birthday"
                        placeholder="Birthday"
                        value={birthday}
                        onChange={(event) => {
                          setBirthday(event.target.value);
                        }}
                      />
                    </div>
                    <span className="myProfileSpan">About myself</span>
                    <div>
                      <ErrorMessage
                        className="RegisterError"
                        name="desc"
                        component="span"
                      />
                      <TextArea
                        className="myProfileTextarea"
                        name="desc"
                        placeholder="Tell us about yourself..."
                        value={desc}
                        onChange={(event) => {
                          setDesc(event.target.value);
                        }}
                      />
                    </div>
                    <button className="updateButton"
                      onClick={() => {
                        updateMyInfo(userId);
                      }}
                    >
                      Update
                    </button>
                    <button className="deleteButton"
                      onClick={() => {
                        deleteMyAccount(userId);
                      }}
                    >
                      Delete
                    </button>
                    {/* <button type="submit" className="loginRegisterButton">
                  Sign Up
                </button> */}
                    {/* <button type="submit" className="loginButton">
                      Log into Account
                    </button> */}
                  </Form>
                </Formik>
              </div>
      

        {/*  */}
      </div>
      </div>
    </>
  );
}
