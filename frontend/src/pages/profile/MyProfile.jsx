import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import { useParams } from "react-router";
import { AuthContext } from "../../utils/AuthContext";
import { useNavigate } from 'react-router-dom';  



export default function MyProfile() {

    let navigate = useNavigate();
    const [user, setUser] = useState({});

    const { userId } = useParams();

    const { authState } = useContext(AuthContext);

const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [role, setRole] = useState();
const [password, setPassword] = useState('');
const [avatarURL, setAvatarURL] = useState();
const [city, setCity] = useState()
const [from, setFrom] = useState();
const [birthday, setBirthday] = useState();
const [desc, setDesc] = useState();
  
 
  useEffect(() => {
  const fetchUser = async () => {
    const res = await axios.get(`users?userId=${userId}`)
    setUsername(res.data.username)
    setCity(res.data.city)
    setFrom(res.data.from)
    setBirthday(res.data.birthday)
    setDesc(res.data.desc)
    setPassword(res.data.password)
    //console.log(res) 
    setUser(res.data);
  };
  //console.log("User in useEffect :", user);
  //window.location.reload();
fetchUser();
}, [userId]);

const updateMyInfo=(userId)=>{
    axios.patch(`users/update/${userId}`,{
        // role: role.current,
       // avatarURL: avatarURL.current,
        username: username,
        //email: email,
      //  password: password.current,
        city: city,
        from: from,
        birthday: birthday,
        desc: desc
    },
    {
        headers: { accessToken: localStorage.getItem("accessToken") },
      }
    ).then((response) => {
        setUser(response.data);
        window.location.reload();
       // navigate("/");
      });
}

 

// const submitHandler = () => {
//     try {
//       const updatedNews = new FormData()
//        // updatedNews.append('id', params.id)
//         updatedNews.append('title', title)
//         updatedNews.append('newsText', newsText)
//         updatedNews.append('image', newImage)
//         updatedNews.append('tags', tags)
//         dispatch(editMyNews(updatedNews))
//         navigate('/news/user/my')
//     } catch (error) {
//         console.log(error)
//     }
// }




    return(
<>
        
 

<div>
      
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
                    <tr >
                    
                    <td>{user.username}
                    <br></br>
                            <input value={username} type="text" className ="form-control" 
                                    onChange={(event) => {setUsername(event.target.value);}
                                }/> </td>
                    <td>{ user.email}
                    <br></br>
                            {/* <input type="text" className ="form-control" 
                                    onChange={(event) => {setEmail(event.target.value);}
                                }/> */}
                                </td>
                                <td>{ user.role }
                    </td>
                    <td>{user.avatarURL }
                    </td>
                    <td>{user.city }
                    <br></br>
                            <input value={city} type="text" className ="form-control" 
                                    onChange={(event) => {setCity(event.target.value);}
                                }/>
                    </td>
                    <td>{ user.from }
                    <br></br>
                            <input value={from} type="text" className ="form-control" 
                                    onChange={(event) => {setFrom(event.target.value);}
                                }/></td>
                    <td>{ user.birthday}
                    <br></br>
                            <input value={birthday} type="text" className ="form-control" 
                                    onChange={(event) => {setBirthday(event.target.value);}
                                }/></td>
                    <td>{ user.desc}
                    <br></br>
                            <input value={desc} type="text" className ="form-control"
                                    onChange={(event) => {setDesc(event.target.value);}
                                }/></td>
                    <td><button onClick={()=> { updateMyInfo(userId)}}>Update</button></td>
                </tr>
                    {/* );
                })} */}
        </tbody>
     </table>
 </div>


</>
    );

}