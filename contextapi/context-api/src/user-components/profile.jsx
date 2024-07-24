import {   useContext, useState } from "react";
import { UserContext } from "./usercontext";

export function Profile() {
    const user= useContext(UserContext);
    const [showPwd, setShowPwd]= useState(false)
    return(
        <div>
          {user?.userName?  `Welcome :${user.userName}` :''} {" "}
          {showPwd? `Password: ${user.password}`:''}
          <br></br>
          <br></br>
          Show Password? <input type="checkbox" value={showPwd.toString()} onChange={()=>{
            setShowPwd(!showPwd)
          }}  />
        </div>
    )
}

export default Profile;