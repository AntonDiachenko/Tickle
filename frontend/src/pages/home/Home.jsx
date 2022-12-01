import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
//import {useEffect, useContext} from "react";
//import {AuthContext} from "../../utils/AuthContext";
import "./home.css";
//import { useNavigate } from "react-router-dom";


export default function Home () {
    // const { authState } = useContext(AuthContext);


    // const navigate = useNavigate();
    // const { authState } = useContext(AuthContext);

    // const userId = authState.userId;
    // console.log("User!!!!!", userId);

    // useEffect(() => {
    //     if(authState.status == false){
    //         console.log("Go to login. AuthStatus:", authState.status)
    //          navigate("/login")
    //        }
    //      }, [authState]);

    // useEffect(() => {
    //     axios
    //       .get("http://localhost:8800/api/auth/user", {
    //         headers: {
    //           accessToken: localStorage.getItem("accessToken"),
    //         },
    //       })
    //       .then((response) => {

    //     }, []);


    return (
             <>
                <Topbar/>
                <div className="homeContainer">
                    <Sidebar/>
                    <Feed/>
                    <Rightbar/>
                </div>
            </>   
    );        
}