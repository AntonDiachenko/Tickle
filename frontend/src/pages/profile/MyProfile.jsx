import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import { useParams } from "react-router";
import "../register/register.css";
import { AuthContext } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
      <div>
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              {/* <h3 className="loginLogo">tickle</h3>
          <span className="loginDesc">
            Tickle your friends via the app so you don't have to get off your
            couch while watching Netflix.
          </span> */}
            </div>
            <div className="loginRight">
              <div className="registerBox">
                <Formik
                  // initialValues={initialValues}
                  // onSubmit={onSubmit}
                 // validationSchema={validationSchema}
                >
                  <Form>
                    <div>
                        <label>Username:</label>
                      <ErrorMessage
                        className="RegisterError"
                        name="username"
                        component="span"
                      />
                      <Field
                        className="loginInput"
                        name="username"
                        placeholder="User name"
                        value={username}
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                    </div>

                    <div>
                      <Field
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
                      />

                      <Field
                        className="loginInput"
                        name="city"
                        placeholder="city"
                        value={city}
                        onChange={(event) => {
                          setCity(event.target.value);
                        }}
                      />
                    </div>

                    <div>
                    <label>From:</label>
                      <ErrorMessage
                        className="RegisterError"
                        name="from"
                        component="span"
                      />
                      <Field
                        className="loginInput"
                        name="from"
                        placeholder="from"
                        value={from}
                        onChange={(event) => {
                          setFrom(event.target.value);
                        }}
                      />
                    </div>

                    <div>
                    <label>Birthday:</label>
                      <ErrorMessage
                        className="RegisterError"
                        name="birthday"
                        component="span"
                      />
                      <Field
                        className="loginInput"
                        name="birthday"
                        placeholder="birthday"
                        value={birthday}
                        onChange={(event) => {
                          setBirthday(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                    <label>Description:</label>
                      <ErrorMessage
                        className="RegisterError"
                        name="desc"
                        component="span"
                      />
                      <Field
                        className="loginInput"
                        name="desc"
                        placeholder="desc"
                        value={desc}
                        onChange={(event) => {
                          setDesc(event.target.value);
                        }}
                      />
                    </div>
                    <button
                      onClick={() => {
                        updateMyInfo(userId);
                      }}
                    >
                      Update
                    </button>
                    <button
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
            </div>
          </div>
        </div>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>AvatarURL</th>
              <th>City</th>
              <th>From</th>
              <th>Birthday</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            {/* {auctionObject.map((val) => {
                    return ( */}
            <tr>
              <td>
                {user.username}
                <br></br>
                <input
                  value={username}
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />{" "}
              </td>
              <td>
                {user.email}
                <br></br>
                {/* <input type="text" className ="form-control" 
                                    onChange={(event) => {setEmail(event.target.value);}
                                }/> */}
              </td>
              <td>{user.role}</td>
              <td>{user.avatarURL}</td>
              <td>
                {user.city}
                <br></br>
                <input
                  value={city}
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
              </td>
              <td>
                {user.from}
                <br></br>
                <input
                  value={from}
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setFrom(event.target.value);
                  }}
                />
              </td>
              <td>
                {user.birthday}
                <br></br>
                <input
                  value={birthday}
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setBirthday(event.target.value);
                  }}
                />
              </td>
              <td>
                {user.desc}
                <br></br>
                <input
                  value={desc}
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setDesc(event.target.value);
                  }}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    updateMyInfo(userId);
                  }}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteMyAccount(userId);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
            {/* );
                })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}
