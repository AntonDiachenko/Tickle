import "./friend.css";
import axios from "../../utils/axios.js";
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"


export default function Friend({user}) {
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//console.log("user from Friend", user)
//let navigate = useNavigate();
// const approveFriend=(id)=>{

//   axios.patch("api/friends/user/approveDate", 
//   {
//     friend: id,
//   },
//   {
//     headers: { accessToken: localStorage.getItem("accessToken") },
//   }).then(() => {
//     navigate("/");
//     }
//   );
//}

// const deleteFriend=(id)=>{

//   axios.delete(`api/friends/user/deleteFriend/${id}`, 
//      {
//     headers: { accessToken: localStorage.getItem("accessToken") },
//   }
//   // {
//   //   friend: id,
//   // }
//   ).then(() => {
    
//     navigate("/");
//     });
//   }    
 
  return (
  
    
        <li >
         <div className="rightbarFollowing">
          <Link to={'/profile/' + user.username} style={{textDecoration:"none"}}>
        <img src={user.avatarURL || PF + "person/NoAvatar.png"} alt="" className="rightbarFollowingImg"/>
        </Link>
     
          <Link to={'/profile/' + user.username} style={{textDecoration:"none"}}>
            <span className="rightbarFollowingName">{user.username}</span>
            </Link>
            </div>
     
        </li>
    
  );
}
