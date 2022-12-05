import axios from "../../utils/axios.js";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext.js";
import { useParams } from "react-router-dom";

export default function Photos() {

  const [photoList, setPhotoList] = useState([]);
  const [albumList, setAlbumList] = useState([]);
 
  // const { authState } = useContext(AuthContext);
  // const { id } = useParams();
  // const  id  = authState.userId;
  
  useEffect(() => {
    // axios
    //   //.http://localhost:8800/api/photos/myphoto/`,
    //     .get(`api/photos/myphoto/`, {
    //     headers: { accessToken: localStorage.getItem("accessToken") },
    //   }).then((response) => {
    //     setPhotoList(response.data);
    //   });
      axios
      //http://localhost:8800/api/photos/getalbums
        .get(`api/photos/getalbums/`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      }).then((response) => {
        setAlbumList(response.data);
      });
  }, []);

  
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
      {/* friendContainer should be changed to photoContainer */}
      <div className="friendContainer row">
        <div className=" row-cols-2  g-4">

        {albumList.map((value, key) => {
          return (
              <div className="col-3"
              onClick={() => {
                if (value=='Albums') {
                  axios
                    //.http://localhost:8800/api/photos/myphoto/`,
                      .get(`api/photos/myphoto/`, {
                      headers: { accessToken: localStorage.getItem("accessToken") },
                    }).then((response) => {
                      setPhotoList(response.data);
                    });
                  
                }else{
                    axios
                      // Get photos by album name
                      //http://localhost:8800/api/photos/getphotobyalbum/:album
                      .get(`api/photos/getphotobyalbum/${value}`, {
                      headers: { accessToken: localStorage.getItem("accessToken") },
                    }).then((response) => {
                      setPhotoList(response.data);
                    });
                }
                
                }}>
                {value}
              </div>
            ); })}
        
          {photoList.map((value, key) => {
              return (
                <div className="row">
                  <div className="col-4">
                  {/* <input id="box" type="checkbox" name="box" /> */}
                    <img 
                    height={400} width={400}
                      src={value.photoURL}
                    />
                  </div>
                  {/* <div class="checkbox" > */}
                      {/* <input id="box" type="checkbox" name="box"/> */}
                    {/* </div> */}
                </div>
              );
          
            
          })}
        </div>
      </div>
    </div>
    
    </>
);
}

