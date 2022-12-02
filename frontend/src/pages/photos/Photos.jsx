
import axios from "../../utils/axios.js";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";


export default function Photos({user}) {

  const [photoList, setPhotoList] = useState([]);
  const userid = user._id;

  useEffect(() => {
    axios
      //.http://localhost:8800/api/photos/getPhotosbyuserid/:userid`,
      .get(`api/photos/getPhotosbyuserid/${userid}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      }).then((response) => {
        setPhotoList(response.data);
      
        // why response is null
      });
  }, []);
  console.log("photo before FOR:", photoList);

  
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
      {/* friendContainer should be changed to photoContainer */}
      <div className="friendContainer row">
        <div className=" row-cols-2  g-4">
          {photoList.map((value, key) => {
            return (
              <div className="col">
                <div className="col">
                  <img
                    src={value.photoURL}
                    // className="card-img-top"
                    // alt="..."
                  />
                  {/* <div className="card-body ">
                    <h5 className="card-title">{value.itemname}</h5>

                    <p className="card-text">{value.description}</p>
                  </div>

                  <div className="row card-footer">
                    <div className="col-6">
                      <p className="text-muted ">${value.price}</p>
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    
    </>
);
}

