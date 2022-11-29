import "./friend.css";
import axios from "../../utils/axios.js";
import { useNavigate } from 'react-router-dom';

export default function Friend({user}) {
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
let navigate = useNavigate();
const approveFriend=(id)=>{

  axios.patch("api/friends/user/approveDate", 
  {
    friend: id,
  },
  {
    headers: { accessToken: localStorage.getItem("accessToken") },
  }).then(() => {
    navigate("/");
    }
  );
}

const deleteFriend=(id)=>{

  axios.delete(`api/friends/user/deleteFriend/${id}`, 
     {
    headers: { accessToken: localStorage.getItem("accessToken") },
  }
  // {
  //   friend: id,
  // }
  ).then(() => {
    
    navigate("/");
    });
  }    

  return (
    <div>
        <li className="sidebarFriend">
            <img src={PF+user.profilePicture} alt="" className="sidebarFriendImg"/>
            <span className="sidebarFriendName">{user.username}</span>
            <button onClick={() => {
                      approveFriend(user._id);
                    }}> Approve
                  </button>

            <button onClick={() => {
                      deleteFriend(user._id);
                    }}>Decline</button>
        </li>
    </div>
  );
}
