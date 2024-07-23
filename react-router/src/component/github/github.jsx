import { useState } from "react";

import { Outlet, useNavigate, useRouteError } from "react-router-dom";

export function Github() {
  //const userId = useParams();

  const navigate = useNavigate();

  const [userId, setUserId] = useState("avilavate");
const [btnText, setBtnText]= useState('Fetch Profile')
const [isDisabled, setIsDisabled]= useState(false)

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          if(!isDisabled) {setIsDisabled(false)}
          setUserId(e.target?.value);
        }}
      
      />
      <button
        disabled={isDisabled}
        onClick={() => {
          if (userId) {
            console.log(`Navigating to /github/${userId}`);
            setUserId('');
            navigate(userId);

          }
        }}
      >

        {btnText}
      </button>
      <Outlet></Outlet>
    </div>
  );
}

export default Github;
