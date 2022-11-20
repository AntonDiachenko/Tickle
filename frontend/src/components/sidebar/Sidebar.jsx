import "./sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
//import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
//import AppsIcon from '@mui/icons-material/Apps';

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <HomeIcon className="sidebarItemIcon"/>
                        <span className="sidebarListItemText"> Home </span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupIcon className="sidebarItemIcon"/>
                        <span className="sidebarListItemText"> Friends </span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarItemIcon"/>
                        <span className="sidebarListItemText"> Groups </span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarksIcon className="sidebarItemIcon"/>
                        <span className="sidebarListItemText"> Bookmarks </span>
                    </li>
                    {/* <li className="sidebarListItem">
                        <AppsIcon className="sidebarItemIcon"/>
                        <span className="sidebarListItemText"> All </span>
                    </li> */}
                    </ul>
                    <button className="sidebarButton"> all</button>
                    <hr className="sidebarHr"/>
                    <ul className="sidebarFriendList">
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/avatar2.jpg" alt="" className="sidebarFriendImg"></img>
                            <span className="sidebarFriendName">John Smith</span>
                        </li>
                    </ul>
            </div>
        </div>
    );
}
